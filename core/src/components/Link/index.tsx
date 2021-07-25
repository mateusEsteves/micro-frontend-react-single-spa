import React from "react";
import { navigateToUrl } from "single-spa";
import { Link as LinkReactRouter } from "react-router-dom";

interface LinkProps {
  children: any;
  to: string;
  singleSpa?: boolean;
}

export default function Link({ children, to, singleSpa }: LinkProps) {
  function navegarParaUrl(event: any) {
    event.preventDefault();
    navigateToUrl((event.target as any).href);
  }

  if (singleSpa)
    return (
      <a href={to} onClick={navegarParaUrl}>
        {children}
      </a>
    );
  else return <LinkReactRouter to={to}>{children}</LinkReactRouter>;
}
