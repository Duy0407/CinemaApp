import { LocationIcon } from "@assets/icons";
import { Color } from "@src/styles";
import { ByCinema, IMovieRoom } from "contants/constants";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps {
  byCinema: boolean;
  onPress?: () => void;
  movieRooms: IMovieRoom[];
}

const Table = ({ byCinema, onPress, movieRooms }: IProps) => {
  const renderText = (value: string) => {
    return value ? value : ".";
  };

  return (
    <View style={styles.table}>
      <View style={styles.thead}>
        <View style={styles.th}>
          <View style={styles.th_first}>
            <Text style={styles.th_title}>Time</Text>
          </View>
          <View style={{ width: "5%" }}></View>
          <View style={styles.th_second}>
            <Text style={styles.th_second_title}>Adult</Text>
            <Text style={styles.th_second_title}>Child</Text>
            <Text style={styles.th_second_title}>Student</Text>
            <Text style={styles.th_second_title}>VIP</Text>
          </View>
        </View>
      </View>
      <View style={styles.tbody}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {movieRooms.map((item, index) => (
            <View key={index}>
              {byCinema && (
                <View
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderBottomWidth: 1,
                    borderColor: "#222e46",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "600",
                        color: Color.white,
                      }}
                    >
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 4 }}>
                      <LocationIcon />
                      <Text
                        style={{
                          color: Color.gray,
                          fontSize: 14,
                          lineHeight: 16,
                        }}
                      >
                        1.5km
                      </Text>
                    </View>
                  </View>
                  <Text style={{ color: Color.gray }}>{item.subName}</Text>
                </View>
              )}
              {item.info.map((info, index) => (
                <TouchableOpacity
                  style={styles.td}
                  key={index}
                  activeOpacity={0.6}
                  onPress={onPress}
                >
                  <View style={styles.td_first}>
                    <Text
                      style={{
                        color: Color.white,
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "600",
                      }}
                    >
                      {info.time}
                    </Text>
                    <Text
                      style={{
                        color: Color.gray,
                        fontSize: 12,
                        lineHeight: 14,
                      }}
                    >
                      {info.viewMode}
                    </Text>
                  </View>
                  <View style={{ width: "5%" }}>
                    <View
                      style={{
                        width: 1,
                        height: 46,
                        backgroundColor: "#222e46",
                      }}
                    ></View>
                  </View>
                  <View style={{ width: "70%", gap: 4 }}>
                    {!byCinema && (
                      <Text
                        style={{
                          fontSize: 14,
                          lineHeight: 16,
                          color: Color.white,
                          fontWeight: "600",
                        }}
                      >
                        {item.name}
                      </Text>
                    )}
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.td_title}>
                        {renderText(info.adult)}
                      </Text>
                      <Text style={styles.td_title}>
                        {renderText(info.child)}
                      </Text>
                      <Text style={styles.td_title}>
                        {renderText(info.student)}
                      </Text>
                      <Text style={styles.td_title}>
                        {renderText(info.vip)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default React.memo(Table);

const styles = StyleSheet.create({
  table: {},
  thead: {
    backgroundColor: Color.gray3,
  },
  th: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  th_first: {
    width: "25%",
  },
  th_title: {
    textAlign: "center",
    color: Color.gray,
  },
  th_second: {
    width: "70%",
    flexDirection: "row",
  },
  th_second_title: {
    color: Color.gray,
    width: "25%",
  },
  tbody: {
    paddingBottom: 70,
  },
  td: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#222e46",
  },
  td_first: {
    width: "25%",
    alignItems: "center",
    gap: 4,
  },
  td_title: {
    width: "25%",
    color: Color.white,
    fontSize: 14,
    lineHeight: 18,
  },
});
