import { PropsWithChildren } from "react";
import { View } from "react-native";
import { styles } from "./main-container.styles";

export const MainContainer = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};
