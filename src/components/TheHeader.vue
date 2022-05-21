<script lang="ts">
export default {
  name: "TheHeader"
}
</script>

<template>
  <div>Booking<a id="room">Room</a> </div>

</template>

<style scoped>
@import '../assets/base.css';

div{
  background-color: var(--color-background-soft);
  border-radius: 10px;

  margin: 30px 30px 0 30px;
  padding: 15px 30px;

  font-weight: 600;
  font-size: 25px;
}

#room {
  color: var(--br-orange);
}

</style>