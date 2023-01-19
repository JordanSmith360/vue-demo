<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref<string>();

const routeToScreen2 = () => {
  router.push(`/screen2/${username.value ?? "DefaultUser"}`);
};

const users = ref<{ name: string; username: string }[]>([
  {
    name: "Joe Soap",
    username: "joe.soap@gmail.com",
  },
  {
    name: "Test Name",
    username: "test.name@gmail.com",
  },
  {
    name: "Test Name2",
    username: "test.name2@gmail.com",
  },
]);
</script>

<template>
  <div class="main-container">
    <div>This is Screen 1</div>
    <div>
      <!-- <input v-model="username" /> -->
      <select v-model="username">
        <option v-for="user in users">
          {{ user.name }} -> {{ user.username }}
        </option>
      </select>
    </div>
    <button class="btn" @click="routeToScreen2">Navigate To Screen 2</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.main-container {
  background: gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  justify-content: space-around;
  align-items: center;
}

.btn {
  width: 50%;
}
</style>
