import { defineStore } from "pinia";
import decode from "jwt-decode";
import axios from "axios";

const REST_ENDPOINT = "https://api.booking-room.fr";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        firstName: null,
        lastName: null,
        email: null,
        studentId: null,
        promo: null,
        association: null,
        access_token: "",
        refresh_token: null
    }),
    getters: {
        decodeJWT: (state) => decode(state.access_token)
    },
    actions: {
        async login(email: string, password: string) {
            let res = await axios({
                url: `${REST_ENDPOINT}/api/login`,
                method: 'POST',
                data: {
                    login: email,
                    password: password,
                    grant_type: "password"
                }
            })

            console.log(res.data);
        }
    }
})