<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import AuthService from "../services/auth.service";

    export default {
    name: "Login",
    data() {
        return {
            mail: "",
            password: "",
        }
    },
    mounted() {
        if(AuthService.isLoggedIn()) {
            this.$router.push('/');
        }
    },
    methods: {
        async login() {
            try {
                await AuthService.login(this.mail, this.password);
                this.$router.push('/');
            } catch(err) {
                alert("Error");
            }
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

        <button v-on:click="login">Connexion</button>

        <div style="padding-top: 10px; text-decoration: underline">
            <router-link to="/signup">Inscription</router-link>
        </div>

    </div>

</template>

<style>
    #login {
    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 50px 70px;
    margin: auto;
    width: 30%;
    text-align: center;

    transform: translateY(50%);
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

    color: var(--br-text-light-1);
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 15px;

    margin: 10px 0px;
    }

    button {
    background-color: var(--br-orange);
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