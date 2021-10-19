<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";
import { useRoute } from "vue-router";
const id = parseInt(useRoute().params.id as string);
const { result, loading } = useQuery(
  gql`
    query {
      getEvent(id: ${id}) {
        id
        title
      }
    }
  `
);
</script>

<template>
  <div class="container">
    <h1 v-if="!loading && result">{{ result.getEvent.title }}</h1>
  </div>
</template>

<style scoped></style>
