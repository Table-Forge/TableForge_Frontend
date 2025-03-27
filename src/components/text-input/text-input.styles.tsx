import { DEFAULT_COLORS } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

const colors = DEFAULT_COLORS;

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "transparent",
    color: colors.white,
    height: 48,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  borderError: {
    borderColor: colors.danger,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.white,
  },
  icon: {
    marginRight: 10,
  },
});
