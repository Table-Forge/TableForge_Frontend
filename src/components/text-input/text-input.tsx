import { TextInput, TextInputProps, View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { styles } from "./text-input.styles";

interface DefaultTextInputProps extends TextInputProps {
  type?: "location" | "text";
  hasError?: boolean;
}

export const DefaultTextInput = ({
  type = "text",
  hasError = false,
  ...props
}: DefaultTextInputProps) => {
  const inputStyles = [styles.wrapper, hasError && styles.borderError];

  return (
    <View style={inputStyles}>
      {type === "location" && (
        <FontAwesome6
          name="location-dot"
          size={20}
          color="rgba(255,255,255,0.7)"
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={"rgba(255,255,255,0.3)"}
        editable={props.editable && type !== "location"}
        {...props}
      />
    </View>
  );
};
