<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import { useUserStore } from '@/stores/user.store';
    import {useRouter} from "vue-router";

    export default {
    name: "Login",
    data() {
        return {
            mail: "",
            password: "",
        }
    },
    setup() {
        const user = useUserStore();
        const router = useRouter();

        async function login(mail: string, password: string) {
            await user.login(mail, password);
            router.push("/");
        }

        function getProfile() {
            user.getProfile();
        }

        return {
            user,
            login,
            getProfile
        };
    },
    async mounted() {
        if(await this.user.isLoggedIn()) {
            this.$router.push('/');
        }
    },
    components: {TheHeader}
    }
</script>

<template>
    <div id="login">
        <div class="form">
            <label for="MailIsep">Mail Isep</label> <br>
            <input type="text" id="MailIsep" name="Mail Isep" v-model="mail"> <br>
        </div>

        <div class="form">
            <label for="PasswordIsep">Mot de passe</label> <br>
            <input type="password" id="PasswordIsep" name="Mot de passe" v-model="password"> <br>
        </div>

        <button class="btn-orange" v-on:click="login(mail, password)">Connexion</button>

        <div style="padding-top: 10px; text-decoration: underline">
            <router-link to="/signup"><a>Inscription</a></router-link>
        </div>

    </div>

</template>

<style>

    #login {
    grid-row-start: 4;
    grid-column-start: 4;

    grid-row-end: 8;
    grid-column-end: 6;


    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 50px 70px;
    text-align: center;

    }

    .form {
    margin-bottom: 10px;
    text-align: left;
    }

    input {
    width: 100%;
    background-color: var(--color-background-mute);
    border-style: none;
    border-radius: 10px;
    height: 36px;
    box-sizing: border-box;

    color: var(--br-text-light-1);
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 15px;

    margin: 10px 0px;
    padding: 0px 10px;
    }

    @media (max-width:810px) {
        #login {
            grid-row-start: 3;
            grid-column-start: 1;

            grid-row-end: 4;
            grid-column-end: 6;
        }
    }

</style>