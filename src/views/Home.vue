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
<div class="wrapper-btn" 
style="grid-template-columns: max-content auto auto; grid-template-rows: auto;">
        <div class="btn-group">
            <button class="btn-campus">NDL</button>
            <button class="btn-campus">NDC</button>
        </div>
        <div class="search">
            <span style="color:var(--br-positive); font-size:12px">Disponible <br></span> 
            <!--<span style="color:var(--br-negative); font-size:12px">Indisponible<br></span>-->
            {{this.reservationState.room}}
        </div>

        <div class="home-request">
            <div class="btn-home-nav"> &lsaquo; </div>
            <div class="btn-home-results"> Semaine </div>
            <div class="btn-home-nav"> &rsaquo; </div>
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