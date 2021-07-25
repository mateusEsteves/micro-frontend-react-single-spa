import React from "react";
import { navigateToUrl } from "single-spa";

interface LinkProps {
  children: any;
  to: string;
}

export default function Link({ children, to }: LinkProps) {
  function navegarParaUrl(event: any) {
    event.preventDefault();
    navigateToUrl((event.target as any).href);
  }

  return (
    <a href={to} onClick={navegarParaUrl}>
      {children}
    </a>
  );
}
