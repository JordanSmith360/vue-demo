<script setup lang="ts">
import { ref } from "vue";
import { WordStructure } from "../main";

defineProps<{ compName: string }>();

const count = ref<number>(0);
</script>

<template>
  <div>
    <div>My component instance: {{ compName }}</div>
    <button @click="count++">Increment Counter</button>
    <div>{{ count }}</div>
  </div>
  <!-- <div v-for="displayData in myDisplayData">
    <div>{{ displayData.title }}</div>
    <div>{{ displayData.body }}</div>
  </div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
