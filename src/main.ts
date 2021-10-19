import { createApp, h, provide } from "vue";
import App from "./App.vue";
import About from "./components/About.vue";
import EventPage from "./components/EventPage.vue";
import * as VueRouter from "vue-router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./utils/createApolloClient";

const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
  { path: "/event/:id", component: EventPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});

app.use(router);

app.mount("#app");
