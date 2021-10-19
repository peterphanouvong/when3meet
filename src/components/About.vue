<script setup lang="ts">
import Navbar from "./Navbar.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query {
    events {
      id
      title
    }
  }
`);

console.log(result.value);
</script>

<template>
  <div class="container">
    <Navbar />
    <h1>About page</h1>
  </div>
</template>

<style scoped></style>
