import { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Color } from "@src/styles";
import { globalStyles } from "@src/styles/styles";
import { ArrowLeftIcon } from "@assets/icons";
import AboutMovie from "./components/AboutMovie";
import SessionsMovie from "./components/SessionsMovie";
import movieDetail from "services/Apis/movieDetail";
import { IMovie } from "contants/constants";
import Loading from "components/Loading";

type Params = RouteProp<
  { MovieDetailScreen: { movieId: number } },
  "MovieDetailScreen"
>;

const renderScene = SceneMap({
  first: AboutMovie,
  second: SessionsMovie,
});


export default function MovieDetailScreen() {
  const router = useNavigation();
  const params = useRoute<Params>();
  const layout = useWindowDimensions();

  const { movieId } = params.params;

  const [index, setIndex] = useState(0);
  const [movie, setMovie] = useState<IMovie>();
  const [loading, setLoading] = useState(true);


  const routes = [
    { key: "first", title: "About" },
    { key: "second", title: "Sessions" },
  ];
  
  useEffect(() => {
    const fetchMoviesDetail = async () => {
      try {
        const movie = await movieDetail.getMovie(movieId);
        setMovie(movie)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }finally {
        setLoading(false);
      }
    };
    fetchMoviesDetail()
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={[globalStyles.safeArea]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.header_icon}
            onPress={() => router.goBack()}
            activeOpacity={0.8}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          <Text style={styles.header_title}>{movie?.name}</Text>
        </View>

        <View style={styles.content}>
          <TabView
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            // renderScene={renderScene}
            renderScene={(route) => (
              route.route.key === 'first' ? (
                <AboutMovie movie={movie} />
              ) : (
                <SessionsMovie />
              )
            )}
            initialLayout={{ width: layout.width }}
            swipeEnabled={false}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={{
                  backgroundColor: "transparent",
                  shadowColor: 'transparent',
                }}
                indicatorStyle={{
                  backgroundColor: Color.primary,
                }}
                labelStyle={{
                  textTransform: 'capitalize',
                  color: Color.gray,
                  shadowColor: 'red'
                }}
                activeColor={Color.primary}
                pressColor="transparent"
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    position: "relative",
    justifyContent: "center",
  },
  header_icon: {
    position: "absolute",
    padding: 8,
    marginLeft: 16,
    zIndex: 1,
  },
  header_title: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "600",
    color: Color.white,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
});
