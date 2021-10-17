<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  value?: string;
}
// v-bind="props"

const props = defineProps<Props>();
const emits = defineEmits(["input"]);

const onInput = (event: any) => {
  emits("input", event.target.value);
};
</script>

<template>
  <input type="text" :value="props.value" @input="onInput" class="c-Input" />
</template>

<style scope>
.c-Input {
  border: 1px solid var(--black-10);
  border-radius: 3px;
  outline: none;
  padding: 0.5rem;
  text-align: center;
}

.c-Input::placeholder {
  color: var(--black-10);
}
</style>
