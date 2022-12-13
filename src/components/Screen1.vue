<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref<string>();

const routeToScreen2 = () => {
  router.push(`/screen2/${username.value ?? "DefaultUser"}`);
};
</script>

<template>
  <div>This is Screen 1</div>
  <div>
    <input v-model="username" />
  </div>
  <button @click="routeToScreen2">Navigate To Screen 2</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
