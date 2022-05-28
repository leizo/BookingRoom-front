<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import TheNavbar from '@/components/TheNavbar.vue';
    import RequestRecap from '@/components/RequestRecap.vue';

    export default {
        name: "Request",
        components: { TheHeader, TheNavbar, RequestRecap }
    }
</script>

<template>
    <div class="col-search">
        <div class="search-request">
            <h1> Etat de la demande </h1>
            <li>
                En cours de validation
            </li>
            <li>
                Validé
            </li>
            <li>
                Rejeté
            </li>
            <br>
            <h1>Type de réservation</h1>
            <li>
                Evenement associatif
            </li>
            <li>
                Projet de groupe
            </li>
            <li>
                Réunion associative
            </li>
        </div>
        <div class="results-request">
            <div class="btn-request-nav"> &lsaquo; </div>
            <div class="btn-request-results"> Résultats </div>
            <div class="btn-request-nav"> &rsaquo; </div>
        </div>
    </div>
    
    <div class="col-results">
        <div>
            <RequestRecap/>
        </div>
        <div>
            <RequestRecap/>
        </div>
        <div>
            <RequestRecap/>
        </div>
        <div>
            <RequestRecap/>
        </div>
    </div>
</template>

<style>

.col-search {
    grid-row-start: 2;
    grid-column-start: 2;

    grid-row-end: 11;
    grid-column-end: 4;
}

.search-request {
    height: 90%;
    background-color:var(--color-background-soft);

    border-radius: 10px;
    padding: 10px 20px;
}

.results-request{
    display: grid;
    grid-template-columns: min-content auto min-content;
    
    margin-top: 10px;
}

.btn-request-nav {
    padding:5px 15px;
    color: var(--br-orange);
    background-color: var(--color-background-soft);
    border-radius: 10px;
    font-weight: 700;
}

.btn-request-results {
    padding:5px;
    text-align: center;
     background-color: var(--color-background-soft);
    border-radius: 10px;
    margin: 0 10px;;
}

.col-results {
    grid-row-start: 2;
    grid-column-start: 4;

    grid-row-end: 11;
    grid-column-end: 8;

    gap: 20px;

    display: grid;
    grid-template-rows: auto auto ;
    grid-template-columns:auto auto ;

}

</style>