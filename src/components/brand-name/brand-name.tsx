import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";

interface BrandNameProps {
  style?: TextStyle;
  size?: number;
}

export const BrandName = ({ style, size = 32 }: BrandNameProps) => {
  return (
    <Text style={[styles.baseText, { fontSize: size }, style]}>
      <Text style={styles.tablePart}>Table</Text>

      <Text style={styles.forgePart}>Forge</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    ...fonts.heavy,
    textAlign: "center",
    letterSpacing: -0.5,
    textTransform: "uppercase",
  },
  tablePart: {
    color: DEFAULT_COLORS.white,
    textShadowColor: "rgba(255, 255, 255, 0.3)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  forgePart: {
    color: DEFAULT_COLORS.tertiary,
    textShadowColor: DEFAULT_COLORS.tertiary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 25,
  },
});
