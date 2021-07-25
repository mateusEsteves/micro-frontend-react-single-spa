import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./registro-microfrontends";
import App from "./app";

window.addEventListener('single-spa:before-routing-event', event => {
  console.log('single-spa is about to mount/unmount applications!');
  console.log((event as any).detail); // PopStateEvent
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("core")
);
