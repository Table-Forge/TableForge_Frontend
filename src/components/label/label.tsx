import { LabelHTMLAttributes } from "react";
import { ThemedText } from "../themed-text/themed-text";
import { styles } from "./label.styles";
import { StyleProp, TextInputProps, TextStyle } from "react-native";

interface ILabelProps {
  style?: StyleProp<TextStyle>;
  text: string;
}

export const Label = ({ text, style }: ILabelProps) => {
  return <ThemedText style={[styles.label, style]}>{text}</ThemedText>;
};
