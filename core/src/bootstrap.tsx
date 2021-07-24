import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./registro-microfrontends";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("core")
);
