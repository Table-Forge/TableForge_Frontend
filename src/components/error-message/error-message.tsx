import { ThemedText } from "../themed-text/themed-text";
import { styles } from "./error-message.styles";

interface IProps {
  text: string;
}

export const ErrorMessage = ({ text }: IProps) => {
  return <ThemedText style={styles.error}>{text}</ThemedText>;
};
