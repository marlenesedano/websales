import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
  // To always go back to the top when going to another product page
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

// export default router;
