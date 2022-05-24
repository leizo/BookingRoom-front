
<script lang="ts">

export default {
  name: "TheNavbar",
  methods: {
    redirectToDisconnect() {
      this.$router.push("/logout");
    },
    redirectToProfile() {
      this.$router.push("/profile");
    }
  }
}
</script>

<template>
  <div class="navbar">
    <button class="page">
      <img src="../assets/icons/FreeRoom.svg" alt="FreeRoom"> <br>
      FreeRoom
    </button>
    <button class="page">
      <img src="../assets/icons/Reservation.svg" alt="FreeRoom"> <br>
      Réservation
    </button>
    <button class="page">
      <img src="../assets/icons/Request.svg" alt="FreeRoom"> <br>
      Demandes
    </button>
    <button class="page" @click="redirectToProfile()">
      <img src="../assets/icons/Profile.svg" alt="FreeRoom"> <br>
      Profil
    </button>
    <button class="page, deco" @click="redirectToDisconnect()">
      <img src="../assets/icons/Disconnect.svg" alt="FreeRoom"> <br>
      Déconnexion
    </button>
  </div>

</template>

<style scoped>

.navbar{
  background-color: var(--color-background-soft);
  border-radius: 10px;

  display: block;
  position: sticky;

  height: 72vh;
  width: fit-content;

  text-align: center;

  margin: 30px 0px 30px 30px;

  font-size: 12px;
}

img{
  height: 40px;
  padding-bottom: 5px;
}

.page{
  color: var(--br-orange);
  text-align: center;
  padding-bottom: 30px;
}

.deco {
  color: var(--color-deconnexion);
}

button, a {
  background-color: var(--color-background-soft) ;
  border-style: none;

  color: var(--br-orange);
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-size: 12px;

  text-decoration: none;

  cursor: pointer;
}

</style>