import { DEFAULT_COLORS } from "@/src/theme/colors";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export const LoadingOverlay = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={DEFAULT_COLORS.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(26, 26, 46, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
});
