import Feather from "@expo/vector-icons/Feather";
import { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { type Theme, useTheme } from "@/providers/theme-provider";

const ThemeToggle = () => {
  const { theme } = useTheme();
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withSpring(
      theme === "light" ? 3.5 : theme === "dark" ? 46 : 88.5,
      {
        damping: 15,
        stiffness: 150,
      },
    );
  }, [theme, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View className="relative h-12 w-36 flex-row items-center justify-between rounded-full bg-secondary p-1">
      <Icon icon="sun" themeName="light" />
      <Icon icon="moon" themeName="dark" />
      <Icon icon="monitor" themeName="system" />
      <Animated.View
        style={[animatedStyle]}
        className="absolute flex size-10 flex-row items-center justify-center rounded-full bg-background"
      />
    </View>
  );
};

const Icon = (props: {
  icon: React.ComponentProps<typeof Feather>["name"];
  themeName: Theme;
}) => {
  const { effectiveTheme, setTheme } = useTheme();
  const isDark = effectiveTheme === "dark";

  return (
    <Pressable
      onPress={() => setTheme(props.themeName)}
      className="relative z-50 flex size-10 flex-row items-center justify-center rounded-full"
    >
      <Feather
        name={props.icon}
        size={20}
        color={`${isDark ? "white" : "black"}`}
      />
    </Pressable>
  );
};

export default ThemeToggle;
