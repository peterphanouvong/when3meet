<script setup lang="ts">
import EventCreateForm from "./EventCreateForm.vue";
</script>

<template>
  <div class="c-HomePage">
    <h1 class="c-HomePage__title">Lets find a time.</h1>
    <EventCreateForm />
  </div>
</template>

<style scoped>
.c-HomePage {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
}
.c-HomePage__title {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
