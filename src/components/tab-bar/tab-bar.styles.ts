import { DefaultTheme } from "@/src/theme/theme";
import { StyleSheet } from "react-native";

const { colors } = DefaultTheme;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "fixed",
    bottom: 0,
    left: 0,
    paddingVertical: 20,
    paddingTop: 20,
    paddingBottom: 35,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.card,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
