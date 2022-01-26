import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import User from "../views/user/User.vue";
import UserProducts from "../views/user/UserProducts.vue";
import UserEdit from "../views/user/UserEdit.vue";
import UserPurchase from "../views/user/UserPurchase.vue";
import UserSales from "../views/user/UserSales.vue";

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
    {
      path: "/produto/:id",
      name: "product",
      component: Product,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props: true,
    },
    {
      path: "/user",
      component: User,
      props: true,
      children: [
        {
          path: "",
          name: "user",
          component: UserProducts,
          props: true,
        },
        {
          path: "purchase",
          name: "purchase",
          component: UserPurchase,
          props: true,
        },
        {
          path: "sales",
          name: "sales",
          component: UserSales,
          props: true,
        },
        {
          path: "edit",
          name: "user-edit",
          component: UserEdit,
          props: true,
        },
      ],
    },
  ],
  // To always go back to the top when going to another product page
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

// export default router;
