import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("some/path", "./welcome/welcome.tsx")
] satisfies RouteConfig;
