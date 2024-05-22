import axiosClient from "./axiosClient";
import { API } from "./api";

const movieService = {
  getMovies: async () => {
    try {
      const response = await axiosClient.get(API.API_GET_MOVIE);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch movies", error);
      throw error;
    }
  },
};
export default movieService;