<script setup lang="ts">
import EventCreateWeekDay from "./EventCreateWeekDay.vue";
const selectedDays = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};

const toggleCheckbox = (day: string) => {
  //@ts-ignore
  selectedDays[day] = !selectedDays[day];
  console.log(selectedDays);
};
</script>

<template>
  <ul class="c-Week">
    <EventCreateWeekDay
      v-for="(value, name) in selectedDays"
      :value="value"
      :name="name"
      :toggleCheckbox="toggleCheckbox"
    />
  </ul>
</template>

<style scoped>
.c-Week {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid var(--black-10);
  border-radius: 3px;
}
</style>
