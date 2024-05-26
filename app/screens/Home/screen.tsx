import { globalStyles } from "@src/styles/styles";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "@assets/images/Logo.png";
import Button from "components/Button/Button";
import { Color } from "@src/styles";
import Movie from "./components/Movie";
import { Language } from "@assets/icons";
import { useEffect, useRef, useState } from "react";
import movieService from "services/Apis/movieService";
import Loading from "components/Loading";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "components/BottomSheet/BottomSheet";
import LanguageBottomSheet from "./components/LanguageBottomSheet";
import i18n from "@src/i18n/i18n.config";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { IMovie } from "contants/constants";

export default function HomeScreen() {
  const { t } = useTranslation();
  const router: any = useNavigation();

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<number>(1);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await movieService.getMovies();
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleBottomSheetLanguage = () => {
    bottomSheetRef.current?.present();
  };

  const handleLanguageSelection = (lang: string, index: number) => {
    i18n.changeLanguage(lang);
    setLanguage(index);
    bottomSheetRef.current?.close();
  };

   
  const handleNavigateMovieDetai = (id: number) => {
    router.navigate("MovieDetailScreen", { movieId: id });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={[globalStyles.safeArea]}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.heade_logo} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            onPress={handleBottomSheetLanguage}
            activeOpacity={0.8}
          >
            <Language />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                color: Color.white,
                fontWeight: "600",
              }}
            >
              {t("language")}
            </Text>
          </TouchableOpacity>
          <Button
            text={t("login")}
            textStyle={styles.button_text}
            buttonStyle={styles.button}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.content_heading}>Now in cinemas</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {movies.map((item, index) => (
              <Movie
                key={index}
                name={item.name}
                img={item.avatar}
                genre={item.genre}
                rating={item.rating}
                onPress={() => handleNavigateMovieDetai(item.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomSheet ref={bottomSheetRef} height={176}>
        <LanguageBottomSheet
          index={language}
          onPress={handleLanguageSelection}
        />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heade_logo: {
    width: 34,
    height: 38,
  },
  button: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  button_text: {
    fontSize: 14,
    lineHeight: 15,
    fontWeight: "500",
    color: Color.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#1A2232",
  },
  content_heading: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    color: Color.white,
  },
});
