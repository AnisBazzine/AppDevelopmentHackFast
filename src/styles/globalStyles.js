import { StyleSheet } from "react-native";
import colors from "./Colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    width: "100%",
  },
  compContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
});

export default globalStyles;
