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
<div class="component-size" >
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
            class="btn-reservation reunion"
            :class="{active: this.reservationState.reservation_type === 'association_meeting'}"
            @click="this.reservationState.reservation_type = 'association_meeting'">
                Réunion associative
        </button> <br>
        <button 
            class="btn-reservation projet"
            :class="{active: this.reservationState.reservation_type === 'group_project'}"
            @click="this.reservationState.reservation_type = 'group_project'">
                Projet de groupe
        </button> <br>
        <button 
            class="btn-reservation evenement"
            :class="{active: this.reservationState.reservation_type === 'association_event'}"
            @click="this.reservationState.reservation_type = 'association_event'">
                Evenement associatif
        </button> <br>
    </div>
    <br>
    <div v-if="this.reservationState.starting_date !== undefined && this.reservationState.ending_date  !== undefined">
        Vous cherchez à réserver la salle <span class="orange">{{this.reservationState.room}}</span> 
        à <span class="orange">{{this.reservationState.campus}}</span> de <span class="orange">{{this.reservationState.starting_date.hours}}h{{this.reservationState.starting_date.minutes !== 0 ? this.reservationState.starting_date.minutes : ''}}</span>
        à <span class="orange">{{this.reservationState.ending_date.hours}}h{{this.reservationState.ending_date.minutes !== 0 ? this.reservationState.ending_date.minutes : ''}}</span> pour <span class="orange">une réunion assiociative </span>
    </div>
    <br>
    <div style="background-color: var(--color-background-mute); padding:5px; border-radius:10px;">
        Réservation au nom de <span class ="orange">Garage</span>
    </div>
    <div>
        <input type="textarea" style="width:100%" placeholder="Veuillez renseigner la raison..." v-model="this.reservationState.event_description" v-on:focusout="test">
    </div>
    <br>
    <div style="text-align: right;">
        <button class="btn-send" @click="postEvent">Envoyer</button>
    </div>
</div>
    
    
    
    
</template>

<style scoped>

.btn-reservation {
    font-size: 14px;
    font-weight : 500;

    margin: 5px;
    width: 100%;
}

.reunion {
    background-color:var(--br-reunion);
    color: rgba(255, 255, 255, 0.5);
}

button.reunion:hover, button.reunion.active {
    background-color: var(--br-reunion-light);
    color: var(--color-text);
}

.projet {
    background-color: var(--br-projet);
    color: rgba(255, 255, 255, 0.5);;
}

button.projet:hover, button.projet.active {
    background-color: var(--br-projet-light);
    color: var(--color-text);
}
.evenement {
    background-color:var(--br-evenement);
    color: rgba(255, 255, 255, 0.5);
}

button.evenement:hover, button.evenement.active {
    background-color: var(--br-evenement-light);
    color: var(--color-text);
}

.btn-send {
    background-color: var(--br-orange);
}

.component-size {
    width:350px
}

@media (max-width:810px) {
    .component-size {
        width:300px;
    }
}

</style>