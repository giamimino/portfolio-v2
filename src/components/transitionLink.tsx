"use client";

import React from "react";
import { useRouter } from "next/navigation";

function sleep(ms:any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter();

  interface HandleTransitionEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleTransition = async (e: HandleTransitionEvent): Promise<void> => {
    e.preventDefault();

    const body: HTMLBodyElement | null = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(300);
    router.push(href);
    await sleep(300);

    body?.classList.remove("page-transition");
  };

  return (
    <a href={href} onClick={handleTransition} {...props}>
      {children}
    </a>
  );
};
