import "../global.css";

import { Slot } from "expo-router";

import { ThemeProvider } from "@/providers/theme-provider";

export default function Layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
