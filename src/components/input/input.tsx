import React, { forwardRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";
import { Label } from "@/src/components/label/label";
import { ErrorMessage } from "@/src/components/error-message/error-message";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}
export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, isPassword, style, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(isPassword);

    return (
      <View style={styles.container}>
        {label && <Label style={styles.label} text={label} />}

        <View style={[styles.inputContainer, error ? styles.inputError : null]}>
          <TextInput
            style={[styles.input, style]}
            placeholderTextColor="#999"
            secureTextEntry={showPassword}
            {...props}
          />

          {isPassword && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.icon}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={DEFAULT_COLORS.white}
              />
            </TouchableOpacity>
          )}
        </View>

        {error && <ErrorMessage text={error} />}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: { marginBottom: 16, width: "100%" },
  label: {
    ...fonts.medium,
    color: DEFAULT_COLORS.white,
    marginBottom: 8,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    color: DEFAULT_COLORS.white,
    ...fonts.regular,
    fontSize: 16,
  },
  inputError: { borderColor: DEFAULT_COLORS.danger },
  icon: { marginLeft: 10 },
});
