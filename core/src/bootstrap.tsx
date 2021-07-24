import React from "react";
import ReactDOM from "react-dom";
import "./registro-microfrontends";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("core")
);
