import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { removeFromShortlist } from "../redux/shortlistSlice";

const Shortlisted = () => {
  const shortlist = useSelector((state) => state.shortlist);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Shortlisted Movies</Text>
        {shortlist.length === 0 ? (
          <Text>No movies in shortlist.</Text>
        ) : (
          <FlatList
            data={shortlist}
            keyExtractor={(item) => item.imdbID}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.title}>
                  {item.Title} ({item.Year})
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch(removeFromShortlist(item.imdbID))}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  title: { fontSize: 16 },
  button: { marginTop: 5, padding: 5, backgroundColor: "red", borderRadius: 5 },
  buttonText: { color: "white", textAlign: "center" },
});
export default Shortlisted;
