import { DEFAULT_COLORS } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: DEFAULT_COLORS.primary,
    borderColor: DEFAULT_COLORS.secondary,
  },
  secondary: {
    backgroundColor: DEFAULT_COLORS.secondary,
    borderColor: DEFAULT_COLORS.primary,
  },
  tertiary: {
    backgroundColor: DEFAULT_COLORS.tertiary,
    borderColor: DEFAULT_COLORS.primary,
  },
  disabled: {
    backgroundColor: "#CBD5E0",
  },
  text: {
    color: DEFAULT_COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
