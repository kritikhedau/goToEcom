import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/omdbapi";

export const useMoviesSearch = (query) => {
  return useQuery({
    queryKey: ["moviesSearch", query],
    queryFn: () => searchMovies(query),
    enabled: !!query, // Only fetch if query is not empty
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
