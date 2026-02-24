import { ThemedText } from "@/src/components/themed-text/themed-text";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
}

export const InfoCard = ({ title, children, onEdit }: IProps) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <ThemedText style={styles.cardTitle}>{title}</ThemedText>
      <TouchableOpacity onPress={onEdit}>
        <Ionicons name="pencil" size={18} color={DEFAULT_COLORS.white} />
      </TouchableOpacity>
    </View>
    {children}
  </View>
);

export const styles = StyleSheet.create({
  card: {
    backgroundColor: DEFAULT_COLORS.background,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    gap: 8,

    borderWidth: 0.5,
    borderColor: DEFAULT_COLORS.tertiary,

    shadowColor: DEFAULT_COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardTitle: {
    ...fonts.bold,
    color: DEFAULT_COLORS.tertiary,
    fontSize: 16,
  },
  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 8,
  },
  cardContentItem: {
    flexDirection: "column",
    gap: 4,
  },
  cardContentLabel: {
    ...fonts.regular,
    fontSize: 12,
    color: DEFAULT_COLORS.white,
    opacity: 0.5,
    textTransform: "uppercase",
  },
  cardContentValue: {
    ...fonts.bold,
    fontSize: 16,
    color: DEFAULT_COLORS.white,
  },
});
