import { registerApplication, start } from "single-spa";

registerApplication(
  "app",
  () => import("app/index"),
  (location) => location.pathname.startsWith("/primeiro-app")
);

start();
