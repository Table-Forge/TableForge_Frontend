import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { styles } from "./themed-text.styles";

export const ThemedText = ({ children }: PropsWithChildren) => {
  return <Text style={styles.text}>{children}</Text>;
};
