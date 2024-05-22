import { Image, ImageBackground, StyleSheet } from "react-native";
import Logo from "@assets/images/Logo.png";
import SplastImage from "@assets/images/SplastImage.png";

export default function SplashScreen() {
  return (
    <ImageBackground source={SplastImage} style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 88,
    height: 99,
  },
});
