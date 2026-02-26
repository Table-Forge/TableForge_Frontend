import { fonts } from "@/src/theme/fonts";
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  StyleSheet,
} from "react-native";
import { DefaultTheme } from "@/src/theme/theme";

type FontWeight = keyof typeof fonts;

export interface IThemedTextProps {
  style?: StyleProp<TextStyle>;
  weight?: FontWeight;
  fontSize?: number;
  color?: string;
}

export const ThemedText = ({
  color,
  fontSize,
  weight = "regular",
  style,
  children,
  ...props
}: TextProps & IThemedTextProps) => {
  const fontWeightStyle = fonts[weight] || fonts.regular;

  return (
    <Text
      style={[
        styles.text,
        fontWeightStyle,
        fontSize ? { fontSize } : null,
        color ? { color } : null,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const styles = StyleSheet.create({
  text: {
    color: DefaultTheme.colors.text,
    flexWrap: "wrap",
  },
});
