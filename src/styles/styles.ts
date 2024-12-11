import { StyleSheet } from "react-native";
import { Color } from "./color";

export const globalStyles = StyleSheet.create({
  safeArea: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.background,
    paddingTop: 34,
  },
  width_hight_full: {
    width: "100%",
    height: "100%",
  },
  widthFull: {
    width: "100%",
  },
  hightFull: {
    height: "100%",
  }
});
