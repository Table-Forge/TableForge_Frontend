import { CharacterItem } from "@/src/components/character-item/character-item";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { charactersList } from "@/src/data/mock";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { ScrollView, StyleSheet, View } from "react-native";

export const CharactersTab = () => {
  return (
    <>
      <View style={styles.titleWrapper}>
        <ThemedText fontSize={16} weight="bold">
          Personagens
        </ThemedText>

        <ThemedText fontSize={16} weight="bold">
          1/2
        </ThemedText>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {charactersList.map((item) => (
          <View key={item.id}>
            <CharacterItem data={item} cardColor={DEFAULT_COLORS.background} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  scrollContainer: {
    paddingRight: 20,
    gap: 12,
  },
});
