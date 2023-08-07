<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'
import { auth } from './globalState';

export default {
  name: 'App',
  data() {
    return {
      auth
    }
  },
  methods: {
    saveLogin() {
      if (sessionStorage.getItem('token') !== null) {
        this.auth.isAuthenticated = true
        this.auth.token = sessionStorage.getItem('token')
        this.auth.role = sessionStorage.getItem('role')
      }
    }
  },
  components: {
    TheNavigation
  },
  mounted() {
    this.saveLogin()
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: black
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #036B85;

}

p {
  font-family: 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
}
</style>
