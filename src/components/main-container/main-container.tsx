import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { mainContainerStyles } from "./main-container.styles";

export const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={mainContainerStyles.container}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
