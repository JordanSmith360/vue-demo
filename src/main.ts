import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Screen1 from "./components/Screen1.vue";
import Screen2 from "./components/Screen2.vue";

const routes = [
  {
    path: "/screen1",
    component: Screen1,
  },
  {
    path: "/screen2/:username",
    component: Screen2,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");

export interface WordStructure {
  title: string;
  body: string;
}
