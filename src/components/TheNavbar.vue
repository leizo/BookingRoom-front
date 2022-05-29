
<script lang="ts">

export default {
  name: "TheNavbar",
  methods: {
    redirectToHomePage() {
      this.$router.push("/");
    },
    redirectToDisconnect() {
      this.$router.push("/logout");
    },
    redirectToProfile() {
      this.$router.push("/profile");
    },
    redirectToReservation() {
      this.$router.push("/reservation");
    },
    redirectToRequest() {
      this.$router.push("/request");
    }
  }
}
</script>

<template>
  <div class="navbar">
    <button class="page, freeroom" @click="redirectToHomePage()">
      <img src="../assets/icons/FreeRoom.svg" alt="FreeRoom"> <br>
      <span class="mobile">FreeRoom</span>
    </button>
    <button class="page, reservation" @click="redirectToReservation()">
      <img src="../assets/icons/Reservation.svg" alt="Reservation"> <br>
      <span class="mobile">Réservation</span>
    </button>
    <button class="page, request"  @click="redirectToRequest()" >
      <img src="../assets/icons/Request.svg" alt="Request"> <br>
      <span class="mobile">Demandes</span>
    </button>
    <button class="page, profile" @click="redirectToProfile()">
      <img src="../assets/icons/Profile.svg" alt="Profile"> <br>
      <span class="mobile">Profil</span>
    </button>
    <button class="page, deco, disconnect" @click="redirectToDisconnect()">
      <img src="../assets/icons/Disconnect.svg" alt="Disconnect"> <br>
      <span class="mobile">Déconnexion</span>
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
  grid-template-rows: repeat(6, auto);

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
  grid-row-start: 6;
  grid-column-start: 1;

  grid-row-end: 7;
  grid-column-end: 2;

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

  padding: 10px;

  cursor: pointer;
}

@media (max-width:810px) {
  .navbar {
  grid-template-columns : repeat(5, auto);
  grid-template-rows: auto;
  gap: 0;
  }
  
  .mobile{
    font-size: 9px;
  }

  img{
  height: 20px;
  padding-bottom: 5px;
}

  .freeroom {
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;

}

.reservation {
  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 2;
  grid-column-end: 3;

}

.request {
  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;

}

.profile {
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 2;
  grid-column-end: 5;

}

.disconnect {
  grid-row-start: 1;
  grid-column-start: 5;

  grid-row-end:2;
  grid-column-end: 6;
}
}

</style>