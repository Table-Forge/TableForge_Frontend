import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, View } from "react-native";
import { ThemedText } from "../themed-text/themed-text";
import { styles } from "./welcome-button.style";
import { useAuth } from "@/src/context/auth";

export const WelcomeButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { user } = useAuth();

  return (
    <Pressable
      onPress={() => navigation.navigate("profile")}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [styles.wrapper, pressed && { opacity: 0.7 }]}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: `${user?.avatarUrl ? user?.avatarUrl : "https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png"}`,
          }}
        />
      </View>
      <ThemedText weight="bold"> Bem vindo(a), {user?.nickname}!</ThemedText>
    </Pressable>
  );
};
