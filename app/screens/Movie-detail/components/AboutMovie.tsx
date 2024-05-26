import { Color } from "@src/styles";
import Button from "components/Button/Button";
import { IMovie } from "contants/constants";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  movie?: IMovie
}

function AboutMovie({movie}: IProps) {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{ width: "100%", height: 210, backgroundColor: Color.black }}
        ></View>
        <View style={styles.review}>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text
              style={{
                color: Color.white,
                fontSize: 20,
                lineHeight: 24,
                fontWeight: "500",
              }}
            >
              {movie?.rating}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 18, color: Color.gray }}>
              IMDB
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text
              style={{
                color: Color.white,
                fontSize: 20,
                lineHeight: 24,
                fontWeight: "500",
              }}
            >
              0
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 18, color: Color.gray }}>
              VTO
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.desript}>{movie?.describe}</Text>

          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Certificate
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                16+
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Runtime
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                02:56
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Release
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                2022
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Genre
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                {movie?.genre}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Director
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                Matt Reeves
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Director
              </Text>
              <Text style={[styles.content_text, { color: Color.white }]}>
                Matt Reeves
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.content_text,
                  { color: Color.gray, minWidth: 90 },
                ]}
              >
                Cast
              </Text>
              <Text style={[styles.content_text, { color: Color.white, flex: 1 }]}>
                Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell,
                Paul Dano, John Turturro, Andy Serkis, Peter Sarsgaard
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Button
            text="Select session"
            buttonStyle={{
              width: "100%",
              height: 56,
              borderRadius: 8,
              backgroundColor: Color.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
            textStyle={{
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "500",
              color: Color.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AboutMovie;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  review: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#1d2a40",
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "#6D9EFF",
    opacity: 0.1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
  },
  desript: {
    color: Color.white,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 16,
  },
  content_text: {
    fontSize: 14,
    lineHeight: 16,
  },

  button: {
    padding: 16,
    backgroundColor: "#1d2a40",
  },
});
