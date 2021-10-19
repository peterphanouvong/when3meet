<script setup lang="ts">
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
import BaseSelect from "./BaseSelect.vue";
import EventCreateWeek from "./EventCreateWeek.vue";
import { gql } from "@apollo/client/core";
import { useRouter } from "vue-router";

const eventName = ref<string>("");
const timeType = ref<"week" | "period">("week");
const startTime = ref("09:00");
const endTime = ref("20:00");
const error = ref<undefined | { field: string; message: string }>();

const router = useRouter();

const { mutate: createEvent } = useMutation(gql`
  mutation createEvent($title: String!) {
    createEvent(title: $title)
  }
`);

const onSubmit = async () => {
  console.log({
    eventName: eventName.value,
    timeType: timeType.value,
    startTime: startTime.value,
    endTime: endTime.value,
  });

  if (eventName.value.trim() === "") {
    // alert("Your event should have a name!");
    error.value = {
      field: "eventName",
      message: "Your event should have a name!",
    };
    return;
  }

  const res = await createEvent({ title: eventName.value });

  if (res) {
    router.push(`/event/${res.data.createEvent}`);
  }
};
</script>

<template>
  <form class="c-EventCreateForm" @submit.prevent="onSubmit">
    <div v-if="error">
      {{ error.message }}
    </div>

    <BaseInput
      class="c-EventCreateForm__item c-EventCreateForm__title"
      :value="eventName"
      @input="eventName = $event"
      label="Event name"
      type="text"
    />

    <BaseSelect
      label="When do you want to meet?"
      :value="timeType"
      @change="timeType = $event"
    >
      <option value="week">On a weekly basis</option>
      <option value="period">Select specific dates</option>
    </BaseSelect>

    <EventCreateWeek v-if="timeType === 'week'" />

    <div class="c-EventCreateForm__time c-EventCreateForm__item">
      <BaseInput
        :value="startTime"
        @input="startTime = $event"
        label="No earlier than"
        type="time"
      />

      <div class="spacer"></div>

      <BaseInput
        :value="endTime"
        @input="endTime = $event"
        label="No later than"
        type="time"
      />
    </div>

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
  margin-bottom: 1.5rem;
}

.c-EventCreateForm__title {
  align-self: center;
}

.c-EventCreateForm__time {
  display: flex;
}
</style>
