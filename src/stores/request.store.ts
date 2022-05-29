import axios from "axios";
import { defineStore } from "pinia";

const LOCAL_REST_ENDPOINT = "http://localhost:8080";

export const useRequestStore = defineStore({
    id: "request",
    state: () => ({
        requests: [] as Array<Event>
    }),
    actions: {
        async fetchRequests(status: string) {
            let res = await axios.get(`${LOCAL_REST_ENDPOINT}/event/status`, 
            {
                params: {
                    status: status
                }
            })

            const requests = res.data;
            this.requests = requests;
        }
    }
})