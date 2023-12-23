// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/View.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/sign-up",
        name: "SignUp",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/Authentication/views/SignUp.vue"),
      },
      {
        path: "/sign-in",
        name: "SignIn",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/Authentication/views/SignIn.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
