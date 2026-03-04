import Slider from "@react-native-community/slider";
import { useController } from "react-hook-form";
import { Text, View, StyleSheet } from "react-native";

import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";

interface ProgressInputProps {
  hookform: any;
  name: string;
  min: number;
  max: number;
}

export const ProgressInput = ({
  hookform,
  name,
  min,
  max,
}: ProgressInputProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control: hookform.control,
    defaultValue: min,
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.labelInfo}>
          {value <= 1 ? "Aventureiro Solitário" : `${value} Heróis`}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={DEFAULT_COLORS.tertiary}
        maximumTrackTintColor="rgba(126, 135, 226, 0.2)"
        thumbTintColor={DEFAULT_COLORS.white}
        step={1}
      />

      <View style={styles.rangeLabels}>
        <Text style={styles.limitText}>{min}</Text>
        <Text style={styles.limitText}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(126, 135, 226, 0.1)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  labelInfo: {
    ...fonts.regular,
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  badge: {
    backgroundColor: "rgba(251, 69, 1, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.tertiary,
  },
  valueText: {
    fontSize: 14,
    ...fonts.heavy,
    color: DEFAULT_COLORS.tertiary,
  },
  slider: {
    width: "100%",
    height: 30,
  },
  rangeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: -4,
  },
  limitText: {
    fontSize: 10,
    color: "rgba(255, 255, 255, 0.3)",
    ...fonts.regular,
  },
});
