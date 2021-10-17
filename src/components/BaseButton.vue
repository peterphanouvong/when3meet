<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  as?: "button" | "link";
  variant?: "solid" | "ghost" | "outline";
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  href: "",
  variant: "solid"
});
</script>

<template>
  <button
    v-if="props.as === 'button'"
    :class="[
      props.variant == 'solid' && 'c-BaseButton--solid',
      props.variant == 'outline' && 'c-BaseButton--outline',
      props.variant == 'ghost' && 'c-BaseButton--ghost',
      'c-BaseButton'
    ]"
  >
    <slot></slot>
  </button>

  <router-link
    v-else
    :class="[
      props.variant == 'solid' && 'c-BaseButton--solid',
      props.variant == 'outline' && 'c-BaseButton--outline',
      props.variant == 'ghost' && 'c-BaseButton--ghost',
      'c-BaseButton'
    ]"
    :to="props.href"
    ><slot></slot
  ></router-link>
</template>

<style scoped>
.c-BaseButton {
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  transition: 0.2s ease;
}

.c-BaseButton:hover {
  transition: 0.2s ease;
}

.c-BaseButton--solid {
  background-color: var(--black-60);
  border: 1px solid var(--black-60);
  color: white;
}

.c-BaseButton--solid:hover {
  background-color: var(--black-70);
}

.c-BaseButton--ghost {
  background-color: transparent;
  color: var(--black-40);
}
.c-BaseButton--ghost:hover {
  background-color: var(--black-0);
}

.c-BaseButton--outline {
  background-color: transparent;
  border: 1px solid var(--black-40);
  color: var(--black-40);
}

.c-BaseButton--outline:hover {
  background-color: var(--black-0);
}
</style>
