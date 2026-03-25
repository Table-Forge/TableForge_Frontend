import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { TOptions, TPrimitives } from "@/src/interfaces";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";
import { ThemedText } from "../themed-text/themed-text";
import { ErrorMessage } from "@/src/components/error-message/error-message";

interface IProps {
  options: TOptions[];
  value?: TPrimitives;
  onSelect: (value: TPrimitives | undefined) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export const Select: React.FC<IProps> = ({
  options,
  value,
  onSelect,
  placeholder = "Selecione...",
  error,
  disabled = false,
}) => {
  const [visible, setVisible] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handlePressOption = (item: TOptions) => {
    onSelect(item.value);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.trigger,
          error ? styles.borderError : null,
          disabled ? styles.triggerDisabled : null,
        ]}
        onPress={() => setVisible(true)}
        activeOpacity={0.8}
      >
        <ThemedText
          style={[
            styles.triggerText,
            !selectedOption && styles.placeholder,
            disabled && styles.textDisabled,
          ]}
        >
          {selectedOption ? selectedOption.name : placeholder}
        </ThemedText>

        <MaterialCommunityIcons
          name={visible ? "chevron-up" : "chevron-down"}
          size={20}
          color={disabled ? "rgba(255,255,255,0.2)" : DEFAULT_COLORS.white}
        />
      </TouchableOpacity>

      {error && <ErrorMessage text={error} />}

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.sheet}>
                <View style={styles.handle} />

                <ThemedText weight="bold" style={styles.sheetTitle}>
                  SELECIONE UMA OPÇÃO
                </ThemedText>

                <FlatList
                  data={options}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{ paddingBottom: 20 }}
                  renderItem={({ item }) => {
                    const isSelected = item.value === value;
                    return (
                      <TouchableOpacity
                        style={[
                          styles.option,
                          isSelected && styles.selectedOption,
                        ]}
                        onPress={() => handlePressOption(item)}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            isSelected && styles.selectedOptionText,
                          ]}
                        >
                          {item.name}
                        </Text>
                        {isSelected && (
                          <MaterialCommunityIcons
                            name="check-decagram"
                            size={18}
                            color={DEFAULT_COLORS.tertiary}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 50,
  },
  triggerDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    opacity: 0.7,
  },
  borderError: {
    borderColor: DEFAULT_COLORS.danger,
  },
  triggerText: {
    fontSize: 16,
    color: DEFAULT_COLORS.white,
    ...fonts.regular,
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.4)",
  },
  textDisabled: {
    color: "rgba(255, 255, 255, 0.4)",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#1A1A2E",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 2,
    borderTopColor: DEFAULT_COLORS.tertiary,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: "50%",
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "rgba(126, 135, 226, 0.3)",
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 12,
  },
  sheetTitle: {
    fontSize: 12,
    textAlign: "center",
    color: DEFAULT_COLORS.tertiary,
    letterSpacing: 2,
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(126, 135, 226, 0.1)",
  },
  selectedOption: {
    backgroundColor: "rgba(251, 69, 1, 0.05)",
  },
  optionText: {
    ...fonts.regular,
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
  },
  selectedOptionText: {
    color: DEFAULT_COLORS.white,
    ...fonts.bold,
  },
});
