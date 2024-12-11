import { ActivityIndicator, ImageBackground, View } from "react-native";
import SplastImage from "@assets/images/SplastImage.png";
import { Color } from "@src/styles";

export default function Loading() {
  return (
    <ImageBackground
      source={SplastImage}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color={Color.primary}/>
    </ImageBackground>
  );
}
