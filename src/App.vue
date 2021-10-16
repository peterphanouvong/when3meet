<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <Navbar />
  <HomePage />
</template>

<style>
@import url("./styles/reset.css");

:root {
  --black: #2c3e50;
}

#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
