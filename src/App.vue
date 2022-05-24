<script lang="ts">
import axios from 'axios';
  import TheHeader from './components/TheHeader.vue';
  import TheNavbar from '@/components/TheNavbar.vue';
import { useUserStore } from './stores/user.store';

  


  export default {
    computed: {
      showNavbar() {
        return !(this.$route.name === "Login" || this.$route.name === "Signup");
      }
    },
    setup() {
      const userStore = useUserStore();
      return {
        userStore
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
