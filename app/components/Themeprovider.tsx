"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Themeprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}