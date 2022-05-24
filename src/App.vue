<script lang="ts">
import axios from 'axios';
  import TheHeader from './components/TheHeader.vue';
  import TheNavbar from '@/components/TheNavbar.vue';

  export default {
    computed: {
      showNavbar() {
        return !(this.$route.name === "Login" || this.$route.name === "Signup");
      }
    },
    components: {
      TheHeader,
        TheNavbar
    }
  }
</script>

<template>
  <TheHeader></TheHeader>
  <div class="wrapper">
      <div id="navbar-container">
        <the-navbar v-if="showNavbar"/>
      </div>
        
      <router-view />
    </div>
  
</template>

<style>
@import './assets/base.css';

#navbar-container {
  height: 72vh;
}
</style>
