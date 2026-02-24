import { PropsWithChildren } from "react";
import { Platform, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { flex: 1 }]}>{children}</View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 50 : 80,
    gap: 20,
  },
});
