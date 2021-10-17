<script setup lang="ts">
import EventCreateWeekDay from "./EventCreateWeekDay.vue";
import { ref } from "vue";

const selectedDays = ref({
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: false
});

const onToggle = (e: any) => {
  //@ts-ignore
  selectedDays.value[e] = !selectedDays.value[e];
  console.log(selectedDays.value);
};
</script>

<template>
  <ul class="c-Week">
    <EventCreateWeekDay
      v-for="(value, name) in selectedDays"
      :value="value"
      :name="name"
      @toggle="onToggle"
    />
  </ul>
</template>

<style scoped>
.c-Week {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.5rem;
  /* border: 1px solid var(--black-10); */
  /* border-radius: 3px; */
}
</style>
