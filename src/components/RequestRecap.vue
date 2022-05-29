<script lang="ts">

import moment from 'moment'
import type { Event } from "@/stores/Interfaces/event";

export default {
    name: "RequestRecap",
    props: {
        request: Object as () => Event
    },
    setup(props) {
        const request = props.request;
        let starting_hour = moment(request?.starting_date).format("HH:mm");
        let ending_hour = moment(request?.ending_date).format("HH:mm");
        let date = moment(request?.starting_date).format("DD MMMM YYYY")

        return {
            request,
            starting_hour,
            ending_hour,
            date
        }
    }

}
</script>

<template>
    <div class="block-request">
        <div style="display: grid; grid-template-columns: auto auto auto; width:100%">
            <h1 style="text-align: left">{{date}}</h1>
            <h2 class="orange" style="text-align:center"> {{starting_hour}} - {{ending_hour}} </h2>
            <h1 style="text-align: right">{{this.request.roomLabel}}</h1>
        </div>
        
        <div>
            Type de réservation :

            <button v-if="this.request.type === 'GROUP_PROJECT'" class="btn-reservation projet">Projet de groupe</button>

            <button v-else-if="this.request.type === 'ASSOCIATION_EVENT'" class="btn-reservation evenement">Evenement associatif</button>

            <button v-else-if="this.request.type === 'ASSOCIATION_MEETING'" class="btn-reservation reunion">Réunion associative</button>
        </div>
        <div style="background-color: var(--color-background-mute); padding:5px; border-radius:10px;">
            Réservation au nom de <span class ="orange">Garage</span>
        </div>
        <div style="padding-top:5px">
            <li>{{this.request.eventTranslations[0].description}}</li>
        </div>


        <div style="padding-top:5px" v-if="request.status === 'IN_REVIEW'">
            <span class="validation">En cours de validation...</span>
            <button class="btn-state" style="float:right;">Annuler</button>
        </div>

        <div v-else-if="request.status === 'REJECTED'">
            <button class="btn-state" >Rejeté...</button>
        </div>
        
        <div v-else-if="request.status === 'ACCEPTED'">
            <button class="btn-state" style="background-color: var(--br-positive)">Validé !</button>
        </div>

    </div>
    
    
</template>

<style>

.block-request {
    background-color: var(--color-background-soft);
    border-radius: 10px;
    padding: 20px;
    margin: 0;
}

.btn-reservation {
    font-size: 14px;
    font-weight : 500;

    margin: 5px;
    width: 100%;
}

.reunion {
    background-color:#005FA1;
    color: rgba(255, 255, 255, 0.5);
}

button.reunion:hover {
    background-color: #1983CD;
    color: var(--color-text);
}

.projet {
    background-color:#0D7064;
    color: rgba(255, 255, 255, 0.5);;
}

button.projet:hover {
    background-color: #129282;
    color: var(--color-text);
}
.evenement {
    background-color:#8B3046;
    color: rgba(255, 255, 255, 0.5);
}

button.evenement:hover {
    background-color: #AF4B63;
    color: var(--color-text);
}

.btn-send {
    background-color: var(--br-orange);
}

.validation {
    background-color: var(--color-background-mute);
    font-weight: 500;
    font-size: 14px;
    border-radius: 20px;
    padding:5px 15px;
}


.btn-state {
    background-color: var(--br-negative);
    font-weight: 500;
    font-size: 14px;
    padding:5px 15px;
}

</style>