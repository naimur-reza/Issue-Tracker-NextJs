"use client";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" enableColorScheme={true}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
