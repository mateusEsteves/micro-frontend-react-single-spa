import { registerApplication, start } from "single-spa";

registerApplication(
  "cachorros",
  // @ts-ignore
  () => import("cachorros/index"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "gatos",
  // @ts-ignore
  () => import("gatos/index"),
  (location) => location.pathname.startsWith("/")
);

start();
