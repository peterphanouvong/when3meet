<script setup lang="ts">
// import { defineProps } from "vue";

// const props = defineProps({});
</script>

<template>
  <button class="c-BaseButton">
    <slot></slot>
  </button>
</template>

<style scoped>
.c-BaseButton {
  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 3px;
  color: var(--black);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  transition: 0.2s ease;
}

.c-BaseButton:hover {
  color: white;
  background-color: var(--black);
  transition: 0.2s ease;
}
</style>
