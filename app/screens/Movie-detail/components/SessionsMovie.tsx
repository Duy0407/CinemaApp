import { ArrowUpIcon, CalendarIcon, SortIcon } from "@assets/icons";
import { useNavigation } from "@react-navigation/native";
import { Color } from "@src/styles";
import CheckBox from "components/CheckBox/CheckBox";
import Table from "components/Table/Table";
import { IMovieRoom } from "contants/constants";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import movieRoomService from "services/Apis/movieRoom";

function SessionsMovie() {
  const router: any = useNavigation();
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [movieRooms, setMovieRoom] = useState<IMovieRoom[]>([])

  useEffect(() => {
    const fetchMovieRoom = async () => {
      try {
        const rooms = await movieRoomService.getMovieRoom();
        setMovieRoom(rooms)
      } catch (error) {
        console.error("Error fetching movies room:", error);
      }
    }
    fetchMovieRoom()
  }, []);

  const handleCheckbox = (value: boolean) => {
    // TODO: handle logic when user check
    setIsCheckBox(value);
  };

  const handleNavigateRoom = () => {
    router.navigate("CinameDetailScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head_lable}>
          <CalendarIcon color={Color.gray} />
          <Text style={styles.head_text}>April, 18</Text>
        </View>
        <View style={styles.head_lable}>
          <SortIcon />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.head_text}>Time</Text>
            <ArrowUpIcon width={16} height={16} />
          </View>
        </View>
        <View style={styles.head_lable}>
          <CheckBox onToggle={handleCheckbox} />
          <Text style={styles.head_text}>By cinema</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.table_head}></View>
        <Table byCinema={isCheckBox} onPress={handleNavigateRoom} movieRooms={movieRooms}/>
      </View>
    </View>
  );
}

export default React.memo(SessionsMovie);

const styles = StyleSheet.create({
  container: {},
  head: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  head_lable: {
    width: "33%",
    alignItems: "center",
    gap: 4,
    paddingVertical: 16,
  },
  head_text: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "600",
    color: Color.white,
  },

  table: {},
  table_head: {},
});
