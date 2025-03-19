import { Theme } from "@react-navigation/native";
import { DEFAULT_COLORS } from "./colors";
import { fonts } from "./fonts";

export const DefaultTheme: Theme = {
  dark: true,
  colors: {
    primary: DEFAULT_COLORS.secondary,
    background: DEFAULT_COLORS.background,
    text: DEFAULT_COLORS.white,
    notification: DEFAULT_COLORS.tertiary,
    card: DEFAULT_COLORS.primary,
    border: DEFAULT_COLORS.tertiary,
  },
  fonts,
};
