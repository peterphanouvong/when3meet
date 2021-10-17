<script setup lang="ts">
interface Props {
  value: string;
}
const props = defineProps<Props>();
const emits = defineEmits(["change"]);

const onChange = (event: any) => {
  emits("change", event.target.value);
  console.log(event.target.value);
};
</script>

<template>
  <select :value="props.value" @change="onChange" class="c-BaseSelect">
    <slot></slot>
  </select>
</template>

<style scope>
.c-BaseSelect {
  border: none;
  border-bottom: 1px solid var(--black-10);
  color: var(--black-60);
  display: inline-block;
  font-size: 1rem;
  outline: none;
  padding: 0.2rem 0;
  text-align: center;
}
</style>
