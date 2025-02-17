import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useMoviesSearch } from "../hooks/useMovies";
import MovieItem from "../component/MovieItem";

const Listing = () => {
  const [query, setQuery] = useState("");
  const { data: movies, isLoading, error } = useMoviesSearch(query);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <TextInput
        placeholder="Search movies..."
        value={query}
        onChangeText={setQuery}
        mode="outlined"
        style={{ margin: "3%" }}
      />

      {isLoading && <ActivityIndicator size="large" />}
      {error && <Text>Error fetching movies!</Text>}
      {movies?.length === 0 && !isLoading && <Text>No movies found.</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieItem movie={item} />}
      />
    </SafeAreaView>
  );
};

export default Listing;
