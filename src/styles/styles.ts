import { StyleSheet } from "react-native";
import { Color } from "./color";

export const globalStyles = StyleSheet.create({
  safeArea: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.background,
    paddingTop: 34,
  },
});
