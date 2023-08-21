"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ReactFCProps = {
  children?: ReactNode;
};

const Provider = ({ children }: ReactFCProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
