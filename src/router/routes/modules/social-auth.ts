const home = [{
  path: "/auth/:provider/callback",
  name: "Social Auth Callback",
  component: () => import("@/views/auth/index.vue"),
  props: true,
  meta: {
    title: "Social Auth Callback",
  },
},
];

export default home;
