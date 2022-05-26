import axios from "axios";
import { defineStore } from "pinia";

const LOCAL_REST_ENDPOINT = "http://localhost:8080";

export const useWeekStore = defineStore({
    id: "week",
    state: () => ({
        events: []
    }),
    actions: {
        async fetchEvents(roomLabel: string) {
            
            let res = await axios.get(`${LOCAL_REST_ENDPOINT}/calendar/week/${roomLabel}`, 
            {
                params: {
                    week_start: "2022-05-23T00:00:00"
                }
            })
            this.events = res.data.map((event: Event) => {
                return { 
                    starting_date: event.starting_date,
                    ending_date: event.ending_date,
                    name: event.eventTranslations
                    .find(translation => translation.lang === "FR")
                    .name,
                    description: event.eventTranslations
                    .find(translation => translation.lang === "FR")
                    .description,
                    type: event.type,
                }
            })
        } 
    }
})

declare interface Event {
    id: string,
    starting_date: string,
    ending_date: string,
    type: string,
    room: Array<any>,
    eventTranslations: Array<any>,
    reviews: Array<any>,
    status: string
}