import { Platform, StyleSheet } from "react-native";

export const mainContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 50 : 80,
    paddingHorizontal: 15,
    gap: 20,
  },
});
