import { createApp } from "vue";
import App from "./App.vue";
import About from "./components/About.vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
