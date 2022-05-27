import { defineStore } from "pinia"
import rooms from "@/helper/rooms.json";
import { BIconEaselFill } from "bootstrap-vue";

export const useReservationStore = defineStore({
    id: "reservation",
    state: () => ({
        room: "",
        campus: "NDL",
        mode: undefined,
        reservation_type: "",
        starting_date: undefined,
        ending_date: undefined,
        room_availability: {}
    }),
    getters: {
        getRooms: (state) => {
            if(state.campus === "NDC") {
                return rooms.NDC;
            } else {
                return rooms.NDL;
            }
        }
    }
})