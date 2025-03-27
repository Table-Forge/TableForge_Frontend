import { DEFAULT_COLORS } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

const colors = DEFAULT_COLORS;

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: 16,
    borderRadius: 8,
    width: "100%",
    position: "relative",
    zIndex: 99,
  },
  fieldset: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  topFilter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    // borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
  },
  bottomFilter: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16,
    // borderRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
    position: "absolute",
    backgroundColor: colors.primary,
    top: "100%",
    left: 0,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  searchInput: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
  },
  filterButton: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: colors.background,
  },
});
