<script setup lang="ts">
interface Props {
  value: boolean;
  name: string;
  toggleCheckbox: (arg0: string) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <li class="c-Weekday">
    <input class="c-Checkbox" type="checkbox" :value="props.value" />
    <span @click="() => toggleCheckbox(props.name)" class="c-CheckboxLabel"
      >{{ props.name }} {{ props.value }}</span
    >
  </li>
</template>

<style scoped>
.c-Weekday {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.c-Checkbox {
  height: 0.9rem;
  width: 0.9rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid var(--black-20);
  border-radius: 3px;
  outline: none;
  transition-duration: 0.2s ease;
  background-color: white;
  cursor: pointer;
}

.c-Checkbox:checked {
  background-color: var(--black-10);
  position: relative;
}
.c-Checkbox:checked::before {
  content: "\2713";
  color: var(--black-50);
  display: block;
  font-size: 0.7rem;
  position: absolute;
  text-align: center;
  top: -0.05rem;
  left: 0.1rem;
}

.c-CheckboxLabel {
  cursor: pointer;
  margin-left: 0.3rem;
}
</style>
