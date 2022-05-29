<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import TheNavbar from '@/components/TheNavbar.vue';
    import { useWeekStore } from '@/stores/week.store';
    import { useReservationStore } from '@/stores/reservation.store';
    import Evenement from '../components/Evenement.vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import { onMounted, ref } from 'vue';
    import moment from 'moment';
    

    export default {
        name: "Home",
        setup() {
            const weekStore = useWeekStore();
            const reservationState = useReservationStore();

            const week = ref([new Date()]);        
            weekStore.fetchEvents(reservationState.room, moment().format('yyyy-MM-DDTHH:mm:ss'));

            return {
                weekStore,
                week,
                reservationState,
                moment
            }
        },
        methods: {
            async onChange(event: any) {
                await this.weekStore.fetchEvents(event.target.value, moment(this.week[0]).format('yyyy-MM-DDTHH:mm:ss'));
                this.reservationState.room = event.target.value;
                this.reservationState.room_availability = this.weekStore.fetchRoomAvailability(moment(this.week[0]).format('yyyy-MM-DDTHH:mm:ss'));
            }
        },
        components: { TheHeader, TheNavbar, Evenement, Datepicker }
    }
</script>

<template>
<div class="wrapper-btn">
        <div class="btn-group" style="margin: auto">
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
        <div class="search">
            <span style="color:var(--br-positive); font-size:12px">Disponible <br></span> 
            <!--<span style="color:var(--br-negative); font-size:12px">Indisponible<br></span>-->
            {{this.reservationState.room}}
        </div>
        <div style="margin: auto">
            <select name="Salle" @change="onChange($event)" v-model="this.reservationState.room">
            <option disabled value="" >Salle</option>
            <option v-for="room in Object.keys(this.reservationState.getRooms)" :key=room> {{room}} </option>
        </select>
        </div>

        <div  style="margin: auto">
            <Datepicker
            class="btn-home-results"
            v-model="this.week"
            style="--dp-background-color: #292E56"
            @update:modelValue="weekStore.fetchEvents(this.reservationState.room, moment(this.week[0]).format('yyyy-MM-DDTHH:mm:ss'))"
            weekPicker dark></Datepicker>
        </div>
    </div>

    <!-- TODO Boucle for en itérant  -->

    <div class="monday">
        Lundi <br>
        <span class="orange">{{moment(this.week[0]).format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]), 'day'))"
            :key="event" :event="event" />
    </div>

    <div class="tuesday">
        Mardi <br>
        <span class="orange">{{moment(this.week[0]).add(1, 'day').format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]).add(1, 'day'), 'day'))"
            :key="event" :event="event" />
    </div>

    <div class="wednesday">
        Mercredi <br>
        <span class="orange">{{moment(this.week[0]).add(2, 'day').format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]).add(2, 'day'), 'day'))"
            :key="event" :event="event" />
    </div>

    <div class="thursday">
        Jeudi <br>
        <span class="orange">{{moment(this.week[0]).add(3, 'day').format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]).add(3, 'day'), 'day'))"
            :key="event" :event="event" />
    </div>

    <div class="friday">
        Vendredi <br>
        <span class="orange">{{moment(this.week[0]).add(4, 'day').format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]).add(4, 'day'), 'day'))"
            :key="event" :event="event" />
    </div>

    <div class="saturday">
        Samedi <br>
        <span class="orange">{{moment(this.week[0]).add(5, 'day').format("DD/MM")}}</span> <br>
        <Evenement v-for="event in this.weekStore.events.filter(event => moment(event.starting_date).isSame(moment(this.week[0]).add(5, 'day'), 'day'))"
            :key="event" :event="event" />
    </div>


</template>

<style >
.wrapper {
    grid-auto-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: none
}

.monday{
    grid-row-start: 3;
    grid-column-start: 2;

    grid-row-end: 11;
    grid-column-end: 3;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.tuesday{
    grid-row-start: 3;
    grid-column-start: 3;

    grid-row-end: 11;
    grid-column-end: 4;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.wednesday{
    grid-row-start: 3;
    grid-column-start: 4;

    grid-row-end: 11;
    grid-column-end: 5;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.thursday{
    grid-row-start: 3;
    grid-column-start: 5;

    grid-row-end: 11;
    grid-column-end: 6;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.friday{
    grid-row-start: 3;
    grid-column-start: 6;

    grid-row-end: 11;
    grid-column-end: 7;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.saturday{
    grid-row-start: 3;
    grid-column-start: 7;

    grid-row-end: 11;
    grid-column-end: 8;

    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
}

.home-request{
    display: grid;
    grid-template-columns: min-content auto min-content;

    align-items: center;
    
    margin-top: 0px;
}

.btn-home-nav {
    padding:5px 5px;
    color: var(--br-orange);
    background-color: var(--color-background-soft);
    border-radius: 10px;
    font-weight: 700;
}

.btn-home-results {
    text-align: center;
    margin: 0 5px;
}

@media (max-width:1150px) {

  .monday{
    grid-row-start: 3;
    grid-column-start: 2;

    grid-row-end: 4;
    grid-column-end: 8;
}

.tuesday{
    grid-row-start: 4;
    grid-column-start: 2;

    grid-row-end: 5;
    grid-column-end: 8;
}

.wednesday{
    grid-row-start: 5;
    grid-column-start: 2;

    grid-row-end: 6;
    grid-column-end: 8;
}

.thursday{
    grid-row-start: 6;
    grid-column-start: 2;

    grid-row-end: 7;
    grid-column-end: 8;
}

.friday{
    grid-row-start: 7;
    grid-column-start: 2;

    grid-row-end: 8;
    grid-column-end: 8;
}

.saturday{
    grid-row-start: 8;
    grid-column-start: 2;

    grid-row-end: 9;
    grid-column-end: 8;
}
}

@media (max-width:810px) {
     .monday{
        grid-row-start: 4;
        grid-column-start: 1;

        grid-row-end: 5;
        grid-column-end: 6;
    }

    .tuesday{
        grid-row-start: 5;
        grid-column-start: 1;

        grid-row-end: 6;
        grid-column-end: 6;
    }

    .wednesday{
        grid-row-start: 6;
        grid-column-start: 1;

        grid-row-end: 7;
        grid-column-end: 6;
    }

    .thursday{
        grid-row-start: 7;
        grid-column-start: 1;

        grid-row-end: 8;
        grid-column-end: 6;
    }

    .friday{
        grid-row-start: 8;
        grid-column-start: 1;

        grid-row-end: 9;
        grid-column-end: 6;
    }

    .saturday{
        grid-row-start: 9;
        grid-column-start: 1;

        grid-row-end: 10;
        grid-column-end: 6;
    }

    .week {
        font-size: 14px;
        padding: 5px 20px;
    }


    .home-request{
        display: grid;
        grid-template-columns: min-content auto min-content;

        align-items: center;
        
        margin-top: 0px;
    }

    .btn-home-nav {
        padding:5px 5px;
        color: var(--br-orange);
        background-color: var(--color-background-soft);
        border-radius: 10px;
        font-weight: 700;
    }

    .btn-home-results {
        padding:5px;
        text-align: center;
        background-color: var(--color-background-soft);
        border-radius: 10px;
        margin: 0 5px;;
    }
}
</style>