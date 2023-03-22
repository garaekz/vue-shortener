import { ERROR_404_COMPONENT, PAGE_NOT_FOUND_NAME } from "../constants";

export const NOT_FOUND_ROUTE = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: ERROR_404_COMPONENT,
  meta: {
    title: "ErrorPage",
  },
};
