import { ThemedText } from "../themed-text/themed-text";
import { styles } from "./label.styles";

interface IProps {
  text: string;
}

export const Label = ({ text }: IProps) => {
  return <ThemedText style={styles.label}>{text}</ThemedText>;
};
