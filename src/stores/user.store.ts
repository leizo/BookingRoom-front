import { defineStore } from "pinia";
import decode from "jwt-decode";
import axios from "axios";

const REST_ENDPOINT = "https://api.booking-room.fr";
const LOCAL_REST_ENDPOINT = "http://localhost:8080";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        firstName: null,
        lastName: null,
        email: null,
        studentId: null,
        promo: null,
        association: null,
        roles: [],
        access_token: "",
        refresh_token: ""
    }),
    actions: {
        async login(email: string, password: string) {
            let res = await axios({
                url: `${LOCAL_REST_ENDPOINT}/api/login`,
                method: 'POST',
                data: {
                    login: email,
                    password: password,
                    grant_type: "password"
                }
            })
            this.access_token = res.data.access_token;
            this.refresh_token = res.data.refresh_token;

            axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}`;
            localStorage.setItem("access_token", this.access_token);
            localStorage.setItem("refresh_token", this.refresh_token);
        },
        async getProfile() {
            let res = await axios({
                url: `${LOCAL_REST_ENDPOINT}/user/me`,
                method: 'GET'
            })

            delete res.data.events;
            Object.assign(this, res.data);
        },

        isLoggedIn() {
            const stored_access_token = localStorage.getItem("access_token");
            const stored_refresh_token = localStorage.getItem("refresh_token");

            this.access_token = stored_access_token !== null ? stored_access_token : "";
            this.refresh_token = stored_refresh_token !== null ? stored_refresh_token : "";

            axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}`;

            if(!this.access_token) {
                return false;
            }

            let decodedToken: any = decode(this.access_token);
            if(!decodedToken.exp) {
                return false;
            }

            return decodedToken.exp > Math.floor(Date.now() / 1000);
        }
    }
})