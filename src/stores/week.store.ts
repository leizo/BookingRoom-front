import axios from "axios";
import { defineStore } from "pinia";
import moment from "moment-timezone";

const LOCAL_REST_ENDPOINT = "http://localhost:8080";

export const useWeekStore = defineStore({
    id: "week",
    state: () => ({
        events: Array<Event>()
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
                    .find(translation => translation.lang === "FR") !== undefined ?
                    event.eventTranslations
                    .find(translation => translation.lang === "FR")
                    .name :
                    "Event Custom",
                    description: event.eventTranslations
                    .find(translation => translation.lang === "FR") !== undefined ?
                    event.eventTranslations
                    .find(translation => translation.lang === "FR")
                    .description :
                    "Description Event Custom",
                    type: event.type,
                }
            })
        },
        fetchRoomAvailability(date: string) {
            let target_date = moment(date);
            let today_events = this.events.filter(event => moment(event.starting_date).startOf('day').isSame(target_date, "day"));
            console.log(today_events);
            if(today_events.length === 1 && today_events[0].description === "Férié") {
                return [];
            }
            let emptyTimeSlot = ["08:00"];
            today_events.forEach(event => {
                if(moment(event.starting_date).format("HH:mm") !== emptyTimeSlot[emptyTimeSlot.length - 1]) {
                    emptyTimeSlot.push(moment.utc(event.starting_date).local().format("HH:mm"));
                } else {
                    emptyTimeSlot.pop();
                }
                emptyTimeSlot.push(moment.utc(event.ending_date).local().format("HH:mm"));
            })
            emptyTimeSlot.push("21:00");
            emptyTimeSlot.sort();
            let roomAvailability = [];
            for(let i = 0; i<emptyTimeSlot.length / 2; i++) {
                roomAvailability.push({
                    start: emptyTimeSlot[i*2],
                    end: emptyTimeSlot[i*2 + 1]
                })
            }
            return roomAvailability;
        }
    }
})

declare interface Event {
    id: string,
    name: string,
    description: string,
    starting_date: string,
    ending_date: string,
    type: string,
    room: Array<any>,
    eventTranslations: Array<any>,
    reviews: Array<any>,
    status: string
}