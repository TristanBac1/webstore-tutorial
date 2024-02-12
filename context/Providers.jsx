"use client";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </NextThemesProvider>
  );
}
