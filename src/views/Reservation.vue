<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import TheNavbar from "@/components/TheNavbar.vue";
    import ReservationRecap from "@/components/ReservationRecap.vue";
    import {useWeekStore} from "@/stores/week.store";
    import { useReservationStore } from '@/stores/reservation.store';
    import { ref } from 'vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        name: "Reservation",
        setup() {
            const week = useWeekStore();
            const reservationState = useReservationStore();
            const date = ref();
            const startTimePicker = ref({minutes: 0});
            const updateRoomAvailabilityOnDate = (date: string) => {
                reservationState.room_availability = week.fetchRoomAvailability(date);
            }

            return {
                week,
                reservationState,
                date,
                startTimePicker,
                updateRoomAvailabilityOnDate
            }
        },
        watch: {
            date(date) {
                this.reservationState.selected_date = date;
                this.reservationState.room_availability = this.week.fetchRoomAvailability(this.date);
            }
        },
        methods: {
            async onChange(event: any) {
                await this.week.fetchEvents(event.target.value);
                this.reservationState.room = event.target.value;
                this.reservationState.room_availability = this.week.fetchRoomAvailability(this.date);
            }
        },
        components: {TheHeader, TheNavbar, ReservationRecap, Datepicker}
    }
</script>

<template>

    <div class="wrapper-btn">
        <div class="btn-group">
            <button  class="btn-campus"
            @click="this.reservationState.campus = 'NDL'"
            :class="{active: this.reservationState.campus === 'NDL'}">
                NDL
            </button>
            <button class="btn-campus"
            @click="this.reservationState.campus = 'NDC'"
            :class="{active: this.reservationState.campus === 'NDC'}">
                NDC
            </button>
        </div>
        <!-- TODO le changement de texte décale les colonnes de la CSS Grid -->
        <div class="search">
            Vous cherchez à réserver la salle <span class="orange">{{ this.reservationState.room }} </span> à <span class="orange">{{ this.reservationState.campus }}</span>
        </div>
        <div>
            <select name="Salle" @change="onChange($event)" v-model="this.reservationState.room">
            <option disabled value="" >Salle</option>
            <option v-for="room in Object.keys(this.reservationState.getRooms)" :key=room> {{room}} </option>
        </select>
        </div>
        <div>
            <button>Date</button>
        </div>
    </div>
    <!--
    <div class="wrapper-col">
        <div class="fond">
            <h1>nom de la Salle</h1>

            Date picker <br>

            <div style="background-color: var(--color-background-mute);padding:10px; border-radius:10px">
                Disponibilités de la salle : <br>
                heures
            </div>

            <div style="display:grid; grid-template-columns: max-content max-content; ">
                <select name="Salle" style="font-size: 14px; ">
                    <option value="Salle">Début</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
                <select name="Salle" style="font-size: 14px;">
                    <option value="Salle">Fin</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
            </div>

            <div style="background-color: var(--br-orange);padding:10px; border-radius:10px">
                Réserver la salle L012 à NDL de 14h15 à 15h30 le lundi 16 avril 2022
            </div>
            
        </div>
        <div class="fond">
            component de recap
        </div>
        <div></div>
    </div>
    -->

    <!-- Dans mon stage on utilisait des v-if pour choisir quel div afficher -->
    
    <div class="col-1">
        <h1>Choix de la date :</h1>
        <Datepicker v-model="this.date" 
        :enableTimePicker="false"
        @update:modelValue="updateRoomAvailabilityOnDate"
        dark placeholder="Date"></Datepicker>

        <div style="display:grid; grid-template-columns: fit-content fit-content; ">
        <h2>Heure de début :</h2>
            <Datepicker v-model="this.reservationState.starting_date" 
                minutesIncrement="15" 
                minutesGridIncrement="15"
                :startTime="startTimePicker"
                timePicker dark
                placeholder="Début">
            </Datepicker>
        <h2>Heure de fin :</h2>
            <Datepicker v-model="this.reservationState.ending_date" 
                minutesIncrement="15" 
                minutesGridIncrement="15"
                :startTime="startTimePicker"
                timePicker dark
                placeholder="Fin">
            </Datepicker>
        </div>

        <li v-show="this.reservationState.room !== '' && this.reservationState.room_availability.length > 1"  v-for="slot in this.reservationState.room_availability" :key="slot">
            <h2>Disponibilités : </h2>
            {{slot.start}} -> {{slot.end}}
        </li>
        
    </div>

    <div class="col-2" v-if="this.reservationState.selected_date !== undefined">
        <ReservationRecap></ReservationRecap>
    </div>

</template>

<style>

.col-1 {
    grid-row-start: 3;
    grid-column-start: 2;

    grid-row-end: 11;
    grid-column-end: 4;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 10px 20px;
}

.col-2 {
    grid-row-start: 3;
    grid-column-start: 4;

    grid-row-end: 11;
    grid-column-end: 5;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 10px 20px;
}

.search {
    background-color: var(--color-background-soft);
    border-radius: 20px;
    text-align: center;
    padding: 10px;
}

button, select {
    background-color: var(--color-background-soft);
    border-radius: 20px;
    font-size: 16px;
    margin: 0;
    padding: 10px 50px;
}

h1{
    font-size: 16px;
}

h2{
    font-size: 14px;
    font-weight: 500;
}

li {
    background-color: var(--color-background-mute);
    margin-bottom:10px;
    padding:5px; 
    border-radius:10px;
    list-style: none;
}


</style>