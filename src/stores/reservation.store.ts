import { defineStore } from "pinia"

export const useReservationStore = defineStore({
    id: "reservation",
    state: () => ({
        room: "",
        campus: "",
        mode: undefined,
        starting_date: undefined,
        ending_date: undefined
    })
})