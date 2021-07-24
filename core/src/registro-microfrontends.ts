import { registerApplication, start } from "single-spa";

registerApplication(
  "app",
  // @ts-ignore
  () => import("app/index"),
  (location) => location.pathname.startsWith("/primeiro-app")
);

start();
