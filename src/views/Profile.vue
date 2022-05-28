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

      <div id="profile">
        <strong style="color: white">Prénom :</strong> {{ user.firstName }} <br>
        <strong style="color: white">Nom :</strong> {{ user.lastName }} <br> <br>

        <strong style="color: white">Mail :</strong> {{ user.email }} <br> <br>

        <strong style="color: white">Promo :</strong> {{ user.promo }} <br>
        <strong style="color: white">Numéro étudiant :</strong> {{ user.studentId }} <br> <br>

        <strong style="color: white">Autorisé à réserver pour</strong> {{ user.association }}
      </div>

</template>

<style>

#profile {
  grid-row-start: 4;
  grid-column-start: 4;

  grid-row-end: 8;
  grid-column-end: 6;

  background-color: var(--color-background-soft);
  border-radius: 10px;

  padding: 50px 70px;

  color: var(--br-orange);

  text-align: left;
}
</style>