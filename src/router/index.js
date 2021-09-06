import Vue from "vue";
import Router from "vue-router";


const routerOptions = [
  { path: "/sign-up", component: "Signup"},
  { path: "/", component: "Home" },
  { path: "/algorithm", component: "Algorithm" },
  { path: "/binary-search", component: "BinarySearch"},
  { path: "/message-board", component: "MessageBoard"}
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../pages/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});