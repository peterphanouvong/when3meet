<script setup lang="ts">
interface Props {
  value: boolean;
  name: string;
}

const props = defineProps<Props>();
const emits = defineEmits(["toggle"]);

const onToggle = () => {
  emits("toggle", props.name);
};
</script>

<template>
  <li
    @click="onToggle"
    :class="['c-Weekday', props.value && 'c-Weekday--active']"
  >
    <span>{{ props.name.slice(0, 1) }}</span>
  </li>
</template>

<style scoped>
.c-Weekday {
  align-items: center;
  background-color: white;
  border: 1px solid var(--black-30);
  border-radius: 50%;
  color: var(--black-30);
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  transition: 0.2s ease;
  width: 2.5rem;
}

.c-Weekday:hover {
  background-color: var(--black-0);
  border-color: var(--black-40);
  color: var(--black-40);
  transition: 0.2s ease;
}

.c-Weekday--active {
  background-color: var(--black-5);
  border-color: var(--black-60);
  color: var(--black-60);
}

.c-Weekday--active:hover {
  background-color: var(--black-5);
  border-color: var(--black-60);
  color: var(--black-60);
}
</style>
