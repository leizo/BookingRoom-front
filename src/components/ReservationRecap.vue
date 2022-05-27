<script lang="ts">
import { useReservationStore } from '@/stores/reservation.store'

export default {
    name: "ReservationRecap",
    setup() {
        const reservationState = useReservationStore();
        return {
            reservationState
        }
    }
}
</script>

<template>
    
    <div style="display: grid; grid-template-columns: auto auto; width:100%">
        <h1 style="text-align: left">Date</h1>
        <h1 style="text-align: right">Salle</h1>
    </div>
    <div class="orange">
        HeureDébut - HeureFin
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
    <div>
        Vous cherchez à réserver la salle <a class="orange">L012</a> <br> 
        à <a class="orange">NDL</a> de <a class="orange">14h</a> à <a class="orange">15h</a> pour <a class="orange">une réunion assiociative </a>
    </div>
    <br>
    <div style="background-color: var(--color-background-mute); padding:5px; border-radius:10px;">
        Réservation au nom de <a class ="orange">Garage</a>
    </div>
    <div>
        <input type="textarea" style="width:100%" value="Veuillez renseigner la raison...">
    </div>
    <br>
    <div style="text-align: right;">
        <button class="btn-send">Envoyer</button>
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