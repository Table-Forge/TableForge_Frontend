import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { DEFAULT_COLORS } from "@/src/theme/colors"; //
import { fonts } from "@/src/theme/fonts"; //

interface BrandNameProps {
  style?: TextStyle;
}

export const BrandName = ({ style }: BrandNameProps) => {
  return (
    <Text style={[styles.baseText, style]}>
      <Text style={{ color: DEFAULT_COLORS.primary }}>Game</Text>
      <Text style={{ color: DEFAULT_COLORS.tertiary }}>Party</Text>
      <Text
        style={{
          color: DEFAULT_COLORS.primary,

          ...fonts.heavy,
        }}
      >
        Finder
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    ...fonts.heavy,
    fontSize: 36,
    textShadowColor: DEFAULT_COLORS.secondary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    padding: 10,
  },
});
