import { StatusBar } from "expo-status-bar";
import { colorScheme } from "nativewind";
import React, { createContext, useContext, useState } from "react";
import { useColorScheme, View } from "react-native";

import { themes } from "@/utils/color-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
  effectiveTheme: "light" | "dark";
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  effectiveTheme: "light",
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const systemTheme = useColorScheme();

  const setTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  const effectiveTheme =
    currentTheme === "system" ? (systemTheme ?? "light") : currentTheme;

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme, effectiveTheme }}
    >
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      <View style={themes[effectiveTheme]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
