import { defineStore } from "pinia"
import rooms from "@/helper/rooms.json";
import { BIconEaselFill } from "bootstrap-vue";
import moment from "moment";

export const useReservationStore = defineStore({
    id: "reservation",
    state: () => ({
        room: "L012",
        campus: "NDL",
        mode: undefined,
        reservation_type: "",
        starting_date: {} as {hours: number, minutes: number, seconds: number},
        ending_date: {} as {hours: number, minutes: number, seconds: number},
        selected_date: undefined,
        selected_week: [],
        room_availability: [] as {start: string, end: string}[],
        event_description: ""
    }),
    getters: {
        getRooms: (state) => {
            if(state.campus === "NDC") {
                return rooms.NDC;
            } else {
                return rooms.NDL;
            }
        },
        getPossibleSlots: (state) => {
            let possibleSlots: string[] = [];
            state.room_availability.forEach((timeSlot) => {
                let startTime = moment(timeSlot.start, "HH:mm");
                let endTime = moment(timeSlot.end, "HH:mm");
                possibleSlots.push(timeSlot.start);
                while(startTime.add(15, "minute").isBefore(endTime)) {
                    possibleSlots.push(startTime.format("HH:mm"));
                }
            });
        
            return possibleSlots;
        }
    }
})