<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";

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
  <form class="c-EventCreateForm" @submit.prevent="onSubmit">
    <BaseInput
      class="c-EventCreateForm__item c-EventCreateForm__title"
      :value="eventName"
      @input="eventName = $event"
      label="Event name"
      type="text"
    />

    <p class="c-EventCreateForm__item">
      When are you free
      <BaseSelect :value="timeType" @change="timeType = $event">
        <option value="week">during the week</option>
        <option value="period">in this time period</option>
      </BaseSelect>
      ?
    </p>

    <p class="c-EventCreateForm__item">
      No earlier than
      <BaseSelect :value="startTime" @change="startTime = $event">
        <option value="init">9:00am</option>
      </BaseSelect>
    </p>

    <p class="c-EventCreateForm__item">
      No later than
      <BaseSelect :value="endTime" @change="endTime = $event">
        <option value="init">10:00pm</option>
      </BaseSelect>
    </p>

    <BaseButton class="c-EventCreateForm__item" type="submit"
      >Create event!</BaseButton
    >
  </form>
</template>

<style scoped>
.c-EventCreateForm {
  width: 100%;
}
.c-EventCreateForm__item {
  margin-bottom: 1rem;
}

.c-EventCreateForm__title {
  align-self: center;
}
</style>
