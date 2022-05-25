<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
import TheNavbar from '@/components/TheNavbar.vue';

    export default {
        name: "Home",
        components: {TheHeader, TheNavbar}
    }
</script>

<template>
<div class="wrapper-btn">
        <div class="btn-group">
            <button>NDL</button>
            <button>NDC</button>
        </div>
        <div class="search">
            Salle
        </div>

        <div>
            <button>Semaine</button>
        </div>
    </div>

    <div class="monday">
        Lundi <br>
        Date <br>
        liste les évènements
    </div>

    <div class="tuesday">
        Mardi <br>
        Date <br>
        liste les évènements
    </div>

    <div class="wednesday">
        Mercredi <br>
        Date <br>
        liste les évènements
    </div>

    <div class="thursday">
        Jeudi <br>
        Date <br>
        liste les évènements
    </div>

    <div class="friday">
        Vendredi <br>
        Date <br>
        liste les évènements
    </div>

    <div class="saturday">
        Samedi <br>
        Date <br>
        liste les évènements
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