import { DEFAULT_COLORS } from "@/src/theme/colors";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { styles } from "./notification-button.styles";
import Entypo from "react-native-vector-icons/Entypo";

export const NotificationButton = () => {
  const colors = DEFAULT_COLORS;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("notifications")}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [styles.wrapper, pressed && { opacity: 0.7 }]}
    >
      <Entypo name="bell" size={24} color={colors.white} />
    </Pressable>
  );
};
