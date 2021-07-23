import React from "react";

export default function MenuLateral() {
  return (
    <aside
      style={{
        width: "300px",
        height: "calc(100vh - 72px)",
        backgroundColor: "salmon",
        display: "inline-block",
        gridArea: 'menuLateral'
      }}
    ></aside>
  );
}
