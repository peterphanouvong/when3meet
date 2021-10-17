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
  text-align: center;
}

.c-HomePage__title {
  margin-bottom: 1rem;
}
</style>
