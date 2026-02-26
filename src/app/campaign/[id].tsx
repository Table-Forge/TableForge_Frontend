import { ActionButton } from "@/src/components/action-button/action-button";
import { HeaderActions } from "@/src/components/header-actions/header-actions";
import { MainContainer } from "@/src/components/main-container/main-container";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { campaignList } from "@/src/data/mock";
import { useBackRouter } from "@/src/hooks/use-back-route";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CampaignScreen() {
  const { id } = useLocalSearchParams();
  const { handleBack } = useBackRouter();

  const data = campaignList.find((item) => item.id === Number(id));

  if (!data) return <Text>Loading...</Text>;
  return (
    <MainContainer>
      <HeaderActions>
        <ActionButton
          variant="circle"
          icon={
            <Ionicons
              name="arrow-back"
              size={24}
              color={DEFAULT_COLORS.white}
            />
          }
          onPress={handleBack}
        />
      </HeaderActions>

      <View>
        <ThemedText>{data?.title}</ThemedText>
      </View>
    </MainContainer>
  );
}
