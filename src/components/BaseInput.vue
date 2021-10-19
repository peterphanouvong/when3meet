<script setup lang="ts">
interface Props {
  value?: string;
  label: string;
  type?: "text" | "time";
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text"
});
const emits = defineEmits(["input"]);

const onInput = (event: any) => {
  emits("input", event.target.value);
};

console.log(props.error);
</script>

<template>
  <div class="c-InputWrapper">
    <label for="" class="c-InputLabel">{{ label }}</label>
    <input
      :value="props.value"
      @input="onInput"
      :class="[props.error && 'c-Input--error', 'c-Input']"
      :type="props.type"
    />
    <div v-if="props.error" class="c-Input__error">
      {{ props.error }}
    </div>
  </div>
</template>

<style scope>
.c-InputWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.c-InputLabel {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.c-Input {
  border: 1px solid var(--black-10);
  border-radius: 3px;
  color: var(--black-60);
  font-size: 1rem;
  outline: none;
  padding: 0.5rem 0.7rem;
  transition: 0.2s ease;
  width: 100%;
}

.c-Input:hover {
  border: 1px solid var(--black-30);
}

.c-Input:focus {
  border: 1px solid var(--black-30);
  outline: var(--black-0) solid 2px;
}

.c-Input::placeholder {
  color: var(--black-10);
}

.c-Input--error {
  border-color: #e23636;
}

.c-Input__error {
  color: #e23636;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
</style>
