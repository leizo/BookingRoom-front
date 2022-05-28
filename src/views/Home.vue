<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import TheNavbar from '@/components/TheNavbar.vue';
    import { useWeekStore } from '@/stores/week.store';
    import { useReservationStore } from '@/stores/reservation.store';
    import Evenement from '../components/Evenement.vue';
    

    export default {
        name: "Home",
        setup() {
            const week = useWeekStore();
            const reservationState = useReservationStore();
            return {
                week,
                reservationState
            }
        },
        components: { TheHeader, TheNavbar, Evenement }
    }
</script>

<template>
<div class="wrapper-btn">
        <div class="btn-group">
            <button class="btn-campus">NDL</button>
            <button class="btn-campus">NDC</button>
        </div>
        <div class="search">
            {{this.reservationState.room}}
        </div>

        <div>
            <button>Semaine</button>
        </div>
    </div>

    <div class="monday">
        Lundi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
        <Evenement/>
        <Evenement/>
        <li v-for="event in this.week.events" :key="event.name">
            {{event.name}}
        </li>
    </div>

    <div class="tuesday">
        Mardi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
        <Evenement/>
    </div>

    <div class="wednesday">
        Mercredi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
        <Evenement/>
        <Evenement/>
    </div>

    <div class="thursday">
        Jeudi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
        <Evenement/>
    </div>

    <div class="friday">
        Vendredi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
        <Evenement/>
        <Evenement/>
        <Evenement/>
    </div>

    <div class="saturday">
        Samedi <br>
        <span class="orange">30/05</span> <br>
        <Evenement/>
    </div>


</template>

<style >
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
</style>