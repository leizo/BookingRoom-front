<script lang="ts">
  import TheHeader from './components/TheHeader.vue';
  export default {
    components: {
      TheHeader
    }
  }
</script>

<template>
  <TheHeader></TheHeader>
  <router-view />
</template>

<style>
@import './assets/base.css';
</style>
