import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToShortlist } from "../redux/shortlistSlice";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/150",
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>
          {movie.Title} ({movie.Year})
        </Text>
        <Text style={styles.type}>{movie.Type.toUpperCase()}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addToShortlist(movie))}
        >
          <Text style={styles.buttonText}>Add to Shortlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: { width: 80, height: 120, borderRadius: 5, marginRight: 10 },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "bold" },
  type: { fontSize: 14, color: "gray" },
  button: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "black",
    borderRadius: 5,
  },
  buttonText: { color: "white", textAlign: "center" },
});

export default MovieItem;
