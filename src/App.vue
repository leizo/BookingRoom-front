<script lang="ts">
import axios from 'axios';
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
