<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

const eventName = ref<string>("");
const timeType = ref<"week" | "period">("week");
const startTime = ref("init");
const endTime = ref("init");

const onSubmit = () => {
  console.log({
    eventName: eventName.value,
    timeType: timeType.value,
    startTime: startTime.value,
    endTime: endTime.value
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      :value="eventName"
      @input="eventName = $event"
      type="text"
      placeholder="Event name"
    />

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

    <BaseButton type="submit">Create event!</BaseButton>
  </form>
</template>

<style scoped></style>
