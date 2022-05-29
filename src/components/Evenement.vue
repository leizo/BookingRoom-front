<script lang="ts">
import type { Event } from "@/stores/Interfaces/event";
import { useReservationStore } from '@/stores/reservation.store';
import moment from "moment";

export default {

    name: "Evenement",
    props: {
        event: Object as () => Event
    },
    setup(props) {
        const reservationState = useReservationStore();
        const starting_hour = moment(props.event?.starting_date);
        const ending_hour = moment(props.event?.ending_date);
        return {
            starting_hour,
            ending_hour,
            reservationState,
            props
        }
    }
}

</script>

<template>
<!-- id en fonction du type d'evenement pour changer la couleur -->
    <div class="block" :id="props.event.type">
        <div style="display:block">
        Cours
        <span style="display:block; float:right">{{this.ending_hour.hour() - this.starting_hour.hour()}}h{{this.ending_hour.minute() - this.ending_hour.minute() !== 0 ? this.ending_hour.minute() - this.ending_hour.minute() : null}}</span>   
        </div>
        <div class="description" :id="props.event.type">
            {{props.event.description}}
        </div>
        <div style="display:block">
        {{this.starting_hour.format("HH:mm")}} - {{this.ending_hour.format("HH:mm")}}
        <span style="display:block; float:right">{{reservationState.room}}</span>
        </div>
    </div>
</template>

<style scoped>

.pre-formated {
    white-space: pre;
}

.block{
    border-radius: 10px;
    padding: 5px;
    font-size: 12px;
    margin: 5px 0;
}

.block#HYPERPLANNING{
    background-color: var(--br-class);
}
.block#GROUP_PROJECT{
    background-color: var(--br-projet);
}
.block#ASSOCIATION_MEETING{
    background-color: var(--br-reunion);
}
.block#ASSOCIATION_EVENT{
    background-color: var(--br-evenement);
}

.description {
    border-radius: 10px;
    padding: 5px;
}

.description#HYPERPLANNING {
    background-color: var(--br-class-light);
}
.description#GROUP_PROJECT {
    background-color: var(--br-projet-light);
}
.description#ASSOCIATION_MEETING {
    background-color: var(--br-reunion-light);
}
.description#ASSOCIATION_EVENT {
    background-color: var(--br-evenement-light);
}

</style>