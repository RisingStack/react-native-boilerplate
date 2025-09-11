import { vars } from "nativewind";

/**
 * Add new vars to tailwind.config.js
 */

export const themes = {
  light: vars({
    "--color-primary": "#000000",
    "--color-secondary": "#0000001a",
    "--color-background": "#ffffff",
    "--color-text": "#000000",
  }),
  dark: vars({
    "--color-primary": "#ffffff",
    "--color-secondary": "#ffffff33",
    "--color-background": "#000000",
    "--color-text": "#ffffff",
  }),
};
