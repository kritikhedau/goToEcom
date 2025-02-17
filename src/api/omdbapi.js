import api from "./api";

export const searchMovies = async (query) => {
  const response = await api.get("/", { params: { s: query } });
  return response.data.Search || [];
};
