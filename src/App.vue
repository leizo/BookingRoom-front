<script lang="ts">
import axios from 'axios';
  import TheHeader from './components/TheHeader.vue';
  import TheNavbar from '@/components/TheNavbar.vue';
import { useUserStore } from './stores/user.store';

import { computed, onMounted, onUnmounted, ref } from "vue"

  


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
    mounted() {
      console.log("test");
    },
    components: {
      TheHeader,
        TheNavbar
    }
  }
  
</script>

<template>
  <div class="wrapper">

    <div id="header-container">
      <TheHeader></TheHeader>
    </div>

    <div id="navbar-container">
      <the-navbar v-if="showNavbar"/>
    </div>
        
    <router-view />
  </div>
  
</template>

<style>
@import './assets/base.css';

</style>
