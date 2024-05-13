import { getAuth } from '@firebase/auth';
import { set, ref, getDatabase } from '@firebase/database';
import { useContext } from "react";
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import ReviewInput from "../Component/ReviewInput";
import ReviewsContext from "../Context/ReviewsContext";

export default function MovieDetailsScreen({ route }) {
  const { movie } = route.params;
  const { setReviewsList } = useContext(ReviewsContext);
  const database = getDatabase();
  const auth = getAuth();

  const handleAddReview = ({ review, rating }) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    
    const newReview = {
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      title: movie.title,
      releaseDate: movie.release_date,
      review,
      rating,
    };

    set(ref(database, `users/${user.uid}/reviews/${movie.id}`), newReview)
      .then(() => {
        console.log("Review added successfully");
        setReviewsList((prevReviews) => [...prevReviews, newReview]);
      })
      .catch((error) => {
        console.error("Error saving review to Firebase:", error);
      });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.posterContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.poster}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>Release Date: {movie.release_date}</Text>
          <Text>Overview: {movie.overview}</Text>
          <ReviewInput onAddReview={handleAddReview} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  posterContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  poster: {
    width: 300,
    height: 450,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
