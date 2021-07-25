import { registerApplication, start } from "single-spa";

registerApplication(
  "cachorros",
  // @ts-ignore
  () => import("cachorros/index"),
  (location) => location.pathname.startsWith("/cachorros")
);

registerApplication(
  "gatos",
  // @ts-ignore
  () => import("gatos/index"),
  (location) => location.pathname.startsWith("/gatos")
);

start();
