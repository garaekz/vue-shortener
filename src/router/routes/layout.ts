import { BASE_HOME, MAIN_LAYOUT } from "@/router/constants";
import { NOT_FOUND_ROUTE } from "@/router/routes/default";

const modules = import.meta.glob<{ default: any }>("./modules/**/*.ts", { eager: true });
const routeModuleList: any = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const layout = {
  path: "/layout",
  name: "Layout",
  component: MAIN_LAYOUT,
  meta: {
    title: "Layout",
  },
  redirect: BASE_HOME,
  children: [...routeModuleList, NOT_FOUND_ROUTE],
};

export default layout;
