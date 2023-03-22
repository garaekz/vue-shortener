import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { baseRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: baseRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})