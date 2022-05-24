<script lang="ts">
    import TheHeader from "../components/TheHeader.vue";
    import TheNavbar from "../components/TheNavbar.vue";

    export default {
    name: "Profil",
    components: {TheHeader, TheNavbar}
    }
</script>

<template>

  <div class="wrapper">

    <div>
      <TheNavbar/>
    </div>

    <div>
      <div id="deconnexion">
        <strong style="color: white">Prénom :</strong> {{ prenom }} <br>
        <strong style="color: white">Nom :</strong> {{ nom }} <br> <br>

        <strong style="color: white">Mail :</strong> {{ mail }} <br> <br>

        <strong style="color: white">Promo :</strong> {{ promo }} <br>
        <strong style="color: white">Numéro étudiant :</strong> {{ numero }} <br> <br>

        <strong style="color: white">Autorisé à réserver pour</strong> {{ asso }}
      </div>


    </div>

  </div>

</template>

<style>

#deconnexion {
  background-color: var(--color-background-soft);
  border-radius: 10px;

  padding: 50px 70px;
  margin: auto;
  width: 30%;

  transform: translateY(85%);

  color: var(--br-orange);
}

.wrapper {
  display: grid;
  grid-template-columns: min-content auto;
  height: 100%;
}

</style>