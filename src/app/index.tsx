import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ThemeToggle from "@/components/theme-toggle";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="mb-4 text-2xl font-bold text-text">Hello World!</Text>
      <ThemeToggle />
    </SafeAreaView>
  );
}
