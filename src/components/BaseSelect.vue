<script setup lang="ts">
interface Props {
  value: string;
  label: string;
}
const props = defineProps<Props>();
const emits = defineEmits(["change"]);

const onChange = (event: any) => {
  emits("change", event.target.value);
  console.log(event.target.value);
};
</script>

<template>
  <div class="c-SelectWrapper">
    <label class="c-SelectLabel">{{ label }}</label>
    <select :value="props.value" @change="onChange" class="c-BaseSelect">
      <slot></slot>
    </select>
  </div>
</template>

<style scope>
.c-SelectWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.c-SelectLabel {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.c-BaseSelect {
  border: 1px solid var(--black-10);
  border-radius: 3px;
  color: var(--black-60);
  font-size: 1rem;
  outline: none;
  padding: 0.5rem 0.7rem;
  transition: 0.2s ease;
  width: 100%;
}
</style>
