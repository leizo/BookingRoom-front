<script lang="ts">
export default {
  name: "TheHeader",
  methods: {
    redirectToHome() {
      this.$router.push("/");
    }
  }
}
</script>

<template>
    <div>
      <a @click="redirectToHome">Booking</a>
      <a class="orange" @click="redirectToHome">Room</a>
    </div>  
</template>

<style scoped>
@import '../assets/base.css';

div{
  background-color: var(--color-background-soft);
  border-radius: 10px;

  padding: 15px 30px;

  font-weight: 600;
  font-size: 25px;
}

</style>