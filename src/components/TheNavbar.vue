
<script setup lang="ts">

export default {
  name: "TheNavbar"
}
</script>

<template>
  <div class="navbar">



    <button class="page">
      <img src="../components/icons/FreeRoom.svg" alt="FreeRoom"> <br>
      FreeRoom
    </button>
    <button class="page">
      <img src="../components/icons/Reservation.svg" alt="FreeRoom"> <br>
      Réservation
    </button>
    <button class="page">
      <img src="../components/icons/Demandes.svg" alt="FreeRoom"> <br>
      Demandes
    </button>
    <button class="page">
      <img src="../components/icons/Profil.svg" alt="FreeRoom"> <br>
      Profil
    </button>
    <button class="page, deco">
      <img src="../components/icons/Deconnexion.svg" alt="FreeRoom"> <br>
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

  padding: 40px 10px;
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

  padding-bottom: 40px;
}

.deco {
  color: var(--color-deconnexion);
}

button {
  background-color: var(--color-background-soft) ;
  border-style: none;

  color: var(--br-orange);
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-size: 12px;
}

</style>