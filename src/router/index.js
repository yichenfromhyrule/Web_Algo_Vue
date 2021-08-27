import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/about", component: "About" },
  { path: "/home", component: "Home" },
  { path: "/algorithm", component: "Algorithm" },
  { path: "/binary-search", component: "BinarySearch"}
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