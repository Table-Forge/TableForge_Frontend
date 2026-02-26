import { CampaignItem } from "@/src/components/campaign-item/campaign-item";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { campaignList } from "@/src/data/mock";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { StyleSheet, View } from "react-native";

export const CampaignsTab = () => {
  return (
    <>
      <View style={styles.titleWrapper}>
        <ThemedText fontSize={16} weight="bold">
          Campanhas
        </ThemedText>

        <ThemedText fontSize={16} weight="bold">
          1/2
        </ThemedText>
      </View>

      <View style={styles.listWrapper}>
        {campaignList.map((item) => (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <CampaignItem data={item} cardColor={DEFAULT_COLORS.background} />
          </View>
        ))}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  listWrapper: {
    width: "100%",
  },
});
