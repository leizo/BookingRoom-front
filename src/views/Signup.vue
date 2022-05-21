<script lang="ts">
    import TheHeader from '../components/TheHeader.vue';
    import User from '../model/User';
    import AuthService from '../services/auth.service';

    export default {
    name: "Signup",
    data() {
        return {
            lastName: "",
            firstName: "",
            promo: undefined,
            studentId: undefined,
            association: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signup() {
            const user = User.Builder
            .withFirstName(this.firstName)
            .withLastName(this.lastName)
            .withStudentId(this.studentId)
            .withPassword(this.password)
            .withEmail(this.email)
            .withPromo(this.promo)
            .withAssociation(this.association)
            .build();
            AuthService.signup(user);
            AuthService.logout();
            this.$router.push('/login')
        }
    },
    components: {TheHeader}
    }
</script>

<template>

    <div id="login">
        <div class="form" style="display: grid; grid-template-columns: auto auto;">
        <div style="margin-right: 15px">
            <label for="Nom">Nom</label> <br>
            <input type="text" id="Nom" name="Nom" v-model="lastName"> <br>
        </div>

        <div style="margin-left: 15px">
            <label for="Prénom">Prénom</label> <br>
            <input type="text" id="Prénom" name="Prénom" v-model="firstName"> <br>
        </div>

        </div>

        <div class="form">
        <label for="Promo">Promo</label> <br>
        <select name="Promo" id="promo-select" v-model="promo">
            <option value=""></option>
            <option value="I1">I1</option>
            <option value="I2">I2</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
        </select>
        </div>

        <div class="form">
        <label for="Numero">Numéro étudiant</label> <br>
        <input type="text" id="Numero" name="Numéro étudiant" v-model="studentId"> <br>
        </div>

        <div class="form">
        <label for="Asso">Association</label> <br>
        <input type="text" id="Association" name="Association" v-model="association"> <br>
        </div>

        <div class="form">
        <label for="MailIsep">Mail Isep</label> <br>
        <input type="text" id="MailIsep" name="Mail Isep" v-model="email"> <br>
        </div>

        <div class="form">
        <label for="PasswordIsep">Mot de passe</label> <br>
        <input type="password" id="PasswordIsep" name="Mot de passe" v-model="password"> <br>
        </div>

        <button v-on:click="signup">
            Soumettre
        </button>
        <div  style="padding-top: 10px; text-decoration: underline">
            <router-link to="/login">Connexion</router-link>
        </div>


    </div>


</template>

<style>
    @import '../assets/base.css';

    #login {
    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 40px 70px;
    margin: auto;

    min-width: fit-content;
    width: 40%;
    text-align: center;

    transform: translateY(5%);
    }

    .form {
    margin-bottom: 10px;
    text-align: left;
    }

    input, select{
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