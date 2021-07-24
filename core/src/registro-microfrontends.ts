import { registerApplication, start } from "single-spa";

registerApplication(
  "app",
  // @ts-ignore
  () => import("cachorros/index"),
  (location) => location.pathname.startsWith("/cachorros")
);

start();
