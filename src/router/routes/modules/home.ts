const home = [{
  path: "/home",
  name: "Home",
  component: () => import("@/views/home/index.vue"),
  meta: {
    title: "Home",
  },
},
{
  path: "/about",
  name: "About",
  component: () => import("@/views/about/index.vue"),
  meta: {
    title: "About",
  },
},
{
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("@/views/dashboard/index.vue"),
  meta: {
    title: "Dashboard",
  },
},
];

export default home;
