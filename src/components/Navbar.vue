<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <nav class="c-Navbar">
    <BaseButton>
      <router-link to="/">Create an Event</router-link>
    </BaseButton>

    <router-link class="c-Navbar__link" to="/about">About</router-link>
    <BaseButton>faggot</BaseButton>
  </nav>
</template>

<style scoped>
.c-Navbar {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-Navbar__homelink {
  border: 1px solid var(--black);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  transition: 0.2s ease;
}

.c-Navbar__homelink:hover {
  color: white;
  background-color: var(--black);
  transition: 0.2s ease;
}

.c-Navbar__link:hover {
  text-decoration: underline;
}
</style>
