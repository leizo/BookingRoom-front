import decode from "jwt-decode";
import axios from "axios";
import { getCookie } from "@/helper/cookie";
import type User from "@/model/User";

const REST_ENDPOINT = "https://api.booking-room.fr";
const LOCAL_REST_ENDPOINT = "http://localhost:8080";
const AUTH_TOKEN_KEY = "authToken";

export default class AuthService {

    static async login(email: string, password: string) {
        try {
            let res = await axios({
                url: `${LOCAL_REST_ENDPOINT}/api/login`,
                method: 'POST',
                data: {
                    login: email,
                    password: password,
                    grant_type: "password"
                }
            })
    
            this.setAuthToken(res.data.access_token);
        } catch (err) {
            throw err;
        }
    }

    static async signup(user: User) {
        try {
            await axios({
                url: `${LOCAL_REST_ENDPOINT}/user/save`,
                method: 'POST',
                data: user
            })
        } catch (err) {
            console.error("Caught an error during signup:", err);
            throw err;
        }
    }

    static logout() {
        this.clearAuthToken();
    }

    static isLoggedIn(): Boolean {
        let authToken = this.getAuthToken();
        return (Boolean(authToken) && !this.isTokenExpired(authToken));
    }

    private static setAuthToken(token: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem(AUTH_TOKEN_KEY, token);
    }

    private static getAuthToken() {
        return localStorage.getItem(AUTH_TOKEN_KEY);
    }

    private static clearAuthToken() {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    private static isTokenExpired(token: any) {
        let decodedToken: any = decode(token);
        if(!decodedToken.exp) {
            return true;
        }

        return decodedToken.exp < Math.floor(Date.now() / 1000);
    }
}


