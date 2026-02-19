import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { ThemedText } from "../themed-text/themed-text";
import { styles } from "./button.styles";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  text,
  children,
  onPress,
  disabled = false,
  isLoading = false,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyles[variant],
        (disabled || isLoading) && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator color="#f8f8f8" />
      ) : text ? (
        <ThemedText style={styles.text}>{text}</ThemedText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
