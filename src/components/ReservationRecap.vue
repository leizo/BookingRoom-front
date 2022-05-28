<script lang="ts">
import { useReservationStore } from '@/stores/reservation.store'
import axios from 'axios';
import moment from 'moment';

const LOCAL_REST_ENDPOINT = "http://localhost:8080"

export default {
    name: "ReservationRecap",
    setup() {
        const reservationState = useReservationStore();
        return {
            reservationState
        }
    },
    methods: {
        async postEvent() {
            console.log();
            let res = await axios({
                url: `${LOCAL_REST_ENDPOINT}/event/create`,
                method: 'POST',
                data: {
                    starting_date: moment(this.reservationState.selected_date)
                        .hour(this.reservationState.starting_date.hours)
                        .minute(this.reservationState.starting_date.minutes)
                        .format("YYYY-MM-DD HH:mm:ss"),
                    ending_date: moment(this.reservationState.selected_date)
                        .hour(this.reservationState.ending_date.hours)
                        .minute(this.reservationState.ending_date.minutes)
                        .format("YYYY-MM-DD HH:mm:ss"),
                    roomLabel: this.reservationState.room,
                    type: this.reservationState.reservation_type.toUpperCase(),
                    name: "Reservation de salle BookingRoom",
                    description: this.reservationState.event_description
                }
            })

            if(res.status === 201) {
                alert("Event created");
            } else {
                alert(res.status);
            }
        },
        test() {
            console.log(this.reservationState.event_description)
        }
    }
}
</script>

<template>
    
    <div style="display: grid; grid-template-columns: auto auto; width:100%">
        <h1 style="text-align: left">Date</h1>
        <h1 style="text-align: right">Salle</h1>
    </div>
    <div class="orange" v-if="this.reservationState.starting_date !== undefined && this.reservationState.ending_date  !== undefined">
        {{this.reservationState.starting_date.hours}}h{{this.reservationState.starting_date.minutes !== 0 ? this.reservationState.starting_date.minutes : ''}}
         - {{this.reservationState.ending_date.hours}}h{{this.reservationState.ending_date.minutes !== 0 ? this.reservationState.ending_date.minutes : ''}}
    </div>
    <br>
    <div>
        Type de réservation : <br>
        <button 
            class="btn-reservation"
            :class="{active: this.reservationState.reservation_type === 'association_meeting'}"
            style="background-color:#005FA1"
            @click="this.reservationState.reservation_type = 'association_meeting'">
                Réunion associative
        </button> <br>
        <button 
            class="btn-reservation"
            :class="{active: this.reservationState.reservation_type === 'group_project'}"
            style="background-color:#0D7064"
            @click="this.reservationState.reservation_type = 'group_project'">
                Projet de groupe
        </button> <br>
        <button 
            class="btn-reservation"
            :class="{active: this.reservationState.reservation_type === 'association_event'}"
            style="background-color:#8B3046"
            @click="this.reservationState.reservation_type = 'association_event'">
                Evenement associatif
        </button> <br>
    </div>
    <br>
    <div v-if="this.reservationState.starting_date !== undefined && this.reservationState.ending_date  !== undefined">
        Vous cherchez à réserver la salle <a class="orange">{{this.reservationState.room}}</a> <br> 
        à <a class="orange">{{this.reservationState.campus}}</a> de <a class="orange">{{this.reservationState.starting_date.hours}}h{{this.reservationState.starting_date.minutes !== 0 ? this.reservationState.starting_date.minutes : ''}}</a>
        à <a class="orange">{{this.reservationState.ending_date.hours}}h{{this.reservationState.ending_date.minutes !== 0 ? this.reservationState.ending_date.minutes : ''}}</a> pour <a class="orange">une réunion assiociative </a>
    </div>
    <br>
    <div style="background-color: var(--color-background-mute); padding:5px; border-radius:10px;">
        Réservation au nom de <a class ="orange">Garage</a>
    </div>
    <div>
        <input type="textarea" style="width:100%" placeholder="Veuillez renseigner la raison..." v-model="this.reservationState.event_description" v-on:focusout="test">
    </div>
    <br>
    <div style="text-align: right;">
        <button class="btn-send" @click="postEvent">Envoyer</button>
    </div>
    
    
</template>

<style scoped>

.active {
    border: 3px solid greenyellow;
}

.btn-reservation {
    font-size: 14px;
    font-weight : 500;

    margin: 5px;
    width: 100%;
}

.btn-send {
    background-color: var(--br-orange);
}

</style>