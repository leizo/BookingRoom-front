<script lang="ts">
import { useUserStore } from '@/stores/user.store';
    import TheHeader from "../components/TheHeader.vue";

    export default {
    name: "Profil",
    setup() {
      const user = useUserStore();
      user.getProfile();
      return {
        user
      }
    },
    components: {TheHeader}
    }
</script>

<template>

    <div>
      <div id="profile">
        <strong style="color: white">Prénom :</strong> {{ user.firstName }} <br>
        <strong style="color: white">Nom :</strong> {{ user.lastName }} <br> <br>

        <strong style="color: white">Mail :</strong> {{ user.email }} <br> <br>

        <strong style="color: white">Promo :</strong> {{ user.promo }} <br>
        <strong style="color: white">Numéro étudiant :</strong> {{ user.studentId }} <br> <br>

        <strong style="color: white">Autorisé à réserver pour</strong> {{ user.association }}
      </div>


    </div>


</template>

<style>

#profile {
  background-color: var(--color-background-soft);
  border-radius: 10px;

  padding: 50px 70px;
  margin: auto;
  width: 30%;

  transform: translateY(85%);

  color: var(--br-orange);

  text-align: left;
}

.wrapper {
  display: grid;
  grid-template-columns: min-content auto;
  height: 100%;
}

</style>