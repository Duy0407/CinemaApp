import axiosClient from "./axiosClient";
import { API } from "./api";

const movieDetail = {
  getMovie: async (id: number) => {
    try {
      const response = await axiosClient.get(`${API.API_GET_MOVIE}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch movies", error);
      throw error;
    }
  },
};

export default movieDetail;
