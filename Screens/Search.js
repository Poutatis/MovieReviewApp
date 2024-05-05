import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

const API_KEY = "d6d860e77e44c8a98c934aaf14e4942b";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleMoviePress = (movie) => {
    navigation.navigate("MovieDetails", { movie });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for movies..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <ScrollView style={styles.resultsContainer}>
        {searchResults.map((movie) => (
          <ListItem
            key={movie.id}
            bottomDivider
            onPress={() => handleMoviePress(movie)}
          >
            <ListItem.Content>
              <ListItem.Title>{movie.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  resultsContainer: {
    flex: 1,
    width: "100%",
  },
});
