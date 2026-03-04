import { ActionButton } from "@/src/components/action-button/action-button";
import { CampaignItem } from "@/src/components/campaign-item/campaign-item";
import { MainContainer } from "@/src/components/main-container/main-container";
import { SearchBar } from "@/src/components/search-bar/search-bar";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { campaignList } from "@/src/data/mock";
import { useLocation } from "@/src/hooks/use-location";
import { Entypo } from "@expo/vector-icons";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { DEFAULT_COLORS } from "@/src/theme/colors";

export default function Search() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { location, loading } = useLocation();
  const locationString = `${location?.city || ""}${
    location?.city && location?.region ? ", " : ""
  }${location?.region || ""}`;

  return (
    <MainContainer style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.locationWrapper}>
          <ThemedText weight="bold" style={styles.locationLabel}>
            REGIÃO RASTREADA
          </ThemedText>
          <View style={styles.locationTextContainer}>
            {loading ? (
              <ActivityIndicator color={DEFAULT_COLORS.tertiary} size="small" />
            ) : (
              <>
                <FontAwesome6
                  name="location-dot"
                  color={DEFAULT_COLORS.secondary}
                  size={16}
                  style={styles.locationIcon}
                />
                <ThemedText style={styles.locationValue} weight="bold">
                  {locationString || "Desconhecida"}
                </ThemedText>
              </>
            )}
          </View>
        </View>

        <ActionButton
          variant="circle"
          icon={<Entypo name="bell" size={20} color={DEFAULT_COLORS.white} />}
          onPress={() => navigation.navigate("notifications")}
          style={styles.bellButton}
        />
      </View>

      <SearchBar />

      <FlatList
        data={campaignList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}>
            <ThemedText weight="bold" style={styles.listTitle}>
              MESAS DISPONÍVEIS
            </ThemedText>
            <View style={styles.listTitleLine} />
          </View>
        )}
        renderItem={({ item }) => <CampaignItem data={item} />}
      />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: DEFAULT_COLORS.background,
  },
  topWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    zIndex: 10,
  },
  locationWrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
  locationLabel: {
    fontSize: 11,
    color: DEFAULT_COLORS.grays?._200 || "rgba(255,255,255,0.5)",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  locationTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationIcon: {
    textShadowColor: "rgba(126, 135, 226, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  locationValue: {
    fontSize: 18,
    color: DEFAULT_COLORS.white,
  },
  bellButton: {
    backgroundColor: "rgba(26, 26, 46, 0.8)",
    borderWidth: 1,
    borderColor: "rgba(126, 135, 226, 0.3)",
  },
  listContent: {
    paddingBottom: 40,
  },
  separator: {
    height: 16,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  listTitle: {
    fontSize: 12,
    color: DEFAULT_COLORS.tertiary,
    letterSpacing: 2,
  },
  listTitleLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(251, 69, 1, 0.2)",
  },
});
