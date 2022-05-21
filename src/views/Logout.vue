<script lang="ts">
    import TheHeader from "../components/TheHeader.vue";
    import TheNavbar from "../components/TheNavbar.vue";

    export default {
    name: "Logout",
    components: {TheHeader, TheNavbar}
    }
</script>

<template>


    <div class="wrapper">

        <div class="header" >
        <HeaderBR/>
        </div>

        <div>
        <NavBarBR/>
        </div>

        <div>
        <div id="deconnexion">
            <div class="form">
            Voulez-vous vous déconnecter ?
            </div>

            <button id="btndeconnexion">
            Déconnexion
            </button>
        </div>


        </div>

    </div>


</template>

<style>
    @import '../assets/styleBase.css';

    .header {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    }

    #deconnexion {
    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 50px 70px;
    margin: auto;
    width: 30%;
    text-align: center;

    transform: translateY(100%);

    }

    .wrapper {
    display: grid;
    grid-template-columns: min-content auto;
    height: 100%;
    }

    #btndeconnexion {
    background-color: var(--color-deconnexion);
    border-radius: 20px;
    border-style: none;
    padding: 10px 20px;

    color: var(--br-text-light-1);
    font-family: Montserrat,sans-serif;
    font-weight: 700;
    font-size: 18px;

    margin-top: 30px;
    }
</style>