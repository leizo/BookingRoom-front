<script lang="ts">
    import TheHeader from "../components/TheHeader.vue";
    import TheNavbar from "../components/TheNavbar.vue";
    import { useUserStore } from '@/stores/user.store';

    export default {
    name: "Logout",
    setup() {
        const user = useUserStore();
        return {
            user
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            this.user.$reset();
            this.$router.push('/login');
        }
    },
    components: {TheHeader, TheNavbar}
    }
</script>

<template>
  
        <div id="deconnexion">
            <div style="text-align: center;">
            Voulez-vous vous déconnecter ?
            </div>

            <button id="btndeconnexion" v-on:click="logout">
            Déconnexion
            </button>
        </div>

</template>

<style>

    #deconnexion {
    grid-row-start: 4;
    grid-column-start: 4;

    grid-row-end: 8;
    grid-column-end: 6;
    
    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 50px 70px;
    text-align: center;


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

    cursor: pointer;
    }
</style>