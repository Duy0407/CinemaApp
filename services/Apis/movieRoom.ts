import axiosClient from "./axiosClient";
import { API } from "./api";

const movieRoomService = {
  getMovieRoom: async () => {
    try {
      const response = await axiosClient.get(API.API_GET_MOVIE_ROOM);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch movie room", error);
      throw error;
    }
  },
};

export default movieRoomService;
