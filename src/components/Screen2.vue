<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const routeToScreen1 = () => {
  router.push("/");
};
</script>

<template>
  <div>Hi {{ route.params.username }}</div>
  <div>This is Screen 2</div>
  <button @click="routeToScreen1">Navigate To Screen 1</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
