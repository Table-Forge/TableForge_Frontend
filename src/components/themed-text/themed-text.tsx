import { fonts } from "@/src/theme/fonts";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { styles } from "./themed-text.styles";

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
        style,
        fontSize ? { fontSize } : null,
        color ? { color } : null,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
