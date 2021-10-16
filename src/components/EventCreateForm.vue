<script setup lang="ts">
import { ref } from "vue";

const eventName = ref<string>("");
const timeType = ref<"week" | "period">("week");
const startTime = ref("init");
const endTime = ref("init");

const onSubmit = () => {
  console.log({
    eventName: eventName.value,
    timeType: timeType.value,
    startTime: startTime.value,
    endTime: endTime.value,
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="eventName" type="text" placeholder="Event name" />

    <p>
      When are you free
      <select v-model="timeType">
        <option value="week">during the week</option>
        <option value="period">in this time period</option>
      </select>
      ?
    </p>

    <p>
      No earlier than
      <select v-model="startTime">
        <option value="init">9:00am</option>
      </select>
    </p>

    <p>
      No later than
      <select v-model="endTime">
        <option value="init">10:00pm</option>
      </select>
    </p>

    <button type="submit">Create event!</button>
  </form>
</template>

<style scoped></style>
