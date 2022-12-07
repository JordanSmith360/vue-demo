<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, watch, computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { WordStructure } from "./main";

const count = ref<number>(0);
const dummyData = {
  title: "Dummy",
  body: "Data.",
};

const myFunction = () => {
  console.log("Call Api");

  count.value++;
  myDisplayData.value.push(dummyData);
};

const myDisplayData = ref<WordStructure[]>([
  {
    title: "Approachable",
    body: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.",
  },
  {
    title: "Performant",
    body: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.",
  },
  {
    title: "Versatile",
    body: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.",
  },
]);

// watch
watch(count, () => {
  if (count.value > 2) {
    console.log("Random function call");
  }
});

const inputRef = ref<string>("");

watch(inputRef, () => {
  console.log("Predictive lookup: ", inputRef.value);
});

// computed
const myAddress = "123 Bob Street";
const isMyAddress = computed(() => "Street: " + inputRef.value);
</script>

<template>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->

    This is the basic vue template div.
  </div>
  <input v-model="inputRef" />
  <div>{{ isMyAddress }}</div>

  <HelloWorld :compName="'number 1'" />
  <br />
  <HelloWorld :compName="'number 2'" />
  <br />
  <HelloWorld :compName="'number 3'" />
  <!-- <div v-if="isMyAddress">Thats my address!!!!</div> -->
  <!-- <div class="test-class">
    {{ count }}
  </div>
  
  <button v-if="count < 5" @click="myFunction">Increment Counter</button> -->
  <!-- <div v-else>Removed button because number is too large</div> -->

  <!-- <div>
    <div>{{ myDisplayData[0].title }}</div>
    <div>{{ myDisplayData[0].body }}</div>
  </div>
  <div>
    <div>{{ myDisplayData[1].title }}</div>
    <div>{{ myDisplayData[1].body }}</div>
  </div>
  <div>
    <div>{{ myDisplayData[2].title }}</div>
    <div>{{ myDisplayData[2].body }}</div>
  </div>
 <HelloWorld msg="Vite + Vue" /> -->
</template>

// styles
<style scoped>
.test-class {
  background-color: blue;
  position: absolute;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
