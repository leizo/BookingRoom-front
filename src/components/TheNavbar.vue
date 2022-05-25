
<script lang="ts">

export default {
  name: "TheNavbar",
  methods: {
    redirectToDisconnect() {
      this.$router.push("/logout");
    },
    redirectToProfile() {
      this.$router.push("/profile");
    },
    redirectToReservation() {
      this.$router.push("/reservation")
    }
  }
}
</script>

<template>
  <div class="navbar">
    <button class="page, freeroom">
      <img src="../assets/icons/FreeRoom.svg" alt="FreeRoom"> <br>
      FreeRoom
    </button>
    <button class="page, reservation" @click="redirectToReservation()" >
      <img src="../assets/icons/Reservation.svg" alt="FreeRoom"> <br>
      Réservation
    </button>
    <button class="page, request">
      <img src="../assets/icons/Request.svg" alt="FreeRoom"> <br>
      Demandes
    </button>
    <button class="page, profile" @click="redirectToProfile()">
      <img src="../assets/icons/Profile.svg" alt="FreeRoom"> <br>
      Profil
    </button>
    <button class="page, deco, disconnect" @click="redirectToDisconnect()">
      <img src="../assets/icons/Disconnect.svg" alt="FreeRoom"> <br>
      Déconnexion
    </button>
  </div>

</template>

<style scoped>

.navbar{
  background-color: var(--color-background-soft);
  border-radius: 10px;
  font-size: 12px;

  display: grid;

  grid-template-columns : auto;
  grid-template-rows: repeat(9, auto);

  gap: 30px;  
}

img{
  height: 40px;
  padding-bottom: 5px;
}

.page{
  color: var(--br-orange);
  text-align: center;
}

.deco {
  color: var(--color-deconnexion);
}

.freeroom {
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;

}

.reservation {
  grid-row-start: 2;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 2;

}

.request {
  grid-row-start: 3;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 2;

}

.profile {
  grid-row-start: 4;
  grid-column-start: 1;

  grid-row-end: 5;
  grid-column-end: 2;

}

.disconnect {
  grid-row-start: 9;
  grid-column-start: 1;

  grid-row-end: 10;
  grid-column-end: 2;

}

button, a {
  background-color: var(--color-background-soft) ;
  border-style: none;

  color: var(--br-orange);
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-size: 12px;

  text-decoration: none;

  padding: 10px;

  cursor: pointer;
}

</style>