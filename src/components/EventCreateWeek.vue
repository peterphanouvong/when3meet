<script setup lang="ts">
import EventCreateWeekDay from "./EventCreateWeekDay.vue";
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";

const selectedDays = ref({
  Monday: true,
  Tuesday: false,
  Wednesday: false,
  Thursday: false,
  Friday: false,
  Saturday: false,
  Sunday: false,
});

const onToggle = (e: any) => {
  //@ts-ignore
  selectedDays.value[e] = !selectedDays.value[e];
};

const selectAll = () => {
  for (const x in selectedDays.value) {
    //@ts-ignore
    selectedDays.value[x] = true;
  }
};
</script>

<template>
  <div class="c-Week">
    <div class="c-Week__subtitle-wrapper">
      <p class="c-Week__subtitle">Select days:</p>
      <BaseButton type="button" size="small" variant="ghost" @click="selectAll"
        >Select all</BaseButton
      >
    </div>

    <ul class="c-Week__list">
      <EventCreateWeekDay
        v-for="(value, name) in selectedDays"
        :value="value"
        :name="name"
        @toggle="onToggle"
      />
    </ul>
  </div>
</template>

<style scoped>
.c-Week {
  padding: 1rem;
}
.c-Week__list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.c-Week__subtitle {
  font-size: 0.8rem;
}

.c-Week__subtitle-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
