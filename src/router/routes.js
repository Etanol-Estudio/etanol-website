const routes = [
  {
    path: "/",
    component: () => import("src/layouts/header.vue"),
    children: [{ path: "", component: () => import("pages/home/index.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
