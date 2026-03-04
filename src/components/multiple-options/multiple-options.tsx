import { useController } from "react-hook-form";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TOptions, TPrimitives } from "@/src/interfaces";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";

interface MultipleOptionsProps {
  hookform: any;
  name: string;
  options: TOptions[];
  hasError?: boolean;
}

export const MultipleOptions = ({
  hookform,
  name,
  options,
  hasError,
}: MultipleOptionsProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control: hookform.control,
  });

  const handlePress = (optionValue?: TPrimitives) => {
    const currentValue = Array.isArray(value) ? value : [];

    if (currentValue.includes(optionValue)) {
      onChange(currentValue.filter((v) => v !== optionValue));
    } else {
      onChange([...currentValue, optionValue]);
    }
  };

  return (
    <View style={styles.wrapper}>
      {options.map((option) => {
        const isSelected = Array.isArray(value) && value.includes(option.value);
        return (
          <TouchableOpacity
            key={option.value?.toString()}
            activeOpacity={0.7}
            onPress={() => handlePress(option.value)}
            style={[
              styles.option,
              isSelected && styles.optionSelected,
              hasError && styles.optionError,
            ]}
          >
            <Text
              style={[
                styles.optionText,
                isSelected && styles.optionTextSelected,
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 4,
    width: "100%",
  },
  option: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(126, 135, 226, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  optionSelected: {
    borderColor: DEFAULT_COLORS.tertiary,
    backgroundColor: "rgba(251, 69, 1, 0.1)",
    shadowColor: DEFAULT_COLORS.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  optionError: {
    borderColor: "#FF4D4D",
  },
  optionText: {
    ...fonts.regular,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
  },
  optionTextSelected: {
    color: DEFAULT_COLORS.white,
    ...fonts.heavy,
  },
});
