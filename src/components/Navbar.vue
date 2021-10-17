<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <nav class="c-Navbar">
    <BaseButton as="link" variant="outline" href="/"
      >Schedule an Event</BaseButton
    >
    <BaseButton as="link" variant="ghost" href="/about">About</BaseButton>
  </nav>
</template>

<style scoped>
.c-Navbar {
  padding: 1rem;
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
