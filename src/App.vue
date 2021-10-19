<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <HomePage />
  </div>
</template>

<style>
@import url("./styles/reset.css");

:root {
  --black-100: #1c1529;
  --black-90: #1e1a33;
  --black-80: #20223d;
  --black-70: #262f47;
  --black-60: #2c3e50;
  --black-50: #485e68;
  --black-40: #637c80;
  --black-30: #7f9796;
  --black-20: #9bafaa;
  --black-10: #b8c6c0;
  --black-5: #d4ddd7;
  --black-0: #ebeeee;

  --error: #e23636;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 1440px;
  margin: auto;
}

.spacer {
  margin-left: 1rem;
}
</style>
