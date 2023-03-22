import { BASE_HOME } from "../constants";
import layout from "./layout";

export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const AuthRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: 'Login',
  },
};

export const baseRoutes = [
  RootRoute,
  AuthRoute,
  layout
];
