import { getAuth } from "@firebase/auth";
import { getDatabase, ref, onValue } from "@firebase/database";
import { useEffect, useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";

import ReviewsContext from "../Context/ReviewsContext";

export default function Reviews() {
  // Get reviews list and setter function from ReviewsContext
  const { reviewsList, setReviewsList } = useContext(ReviewsContext);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const db = getDatabase();
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }
    // Reference to the user's reviews in database
    const reviewsRef = ref(db, `users/${user.uid}/reviews`);
    // Listen for changes in the reviews data
    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const reviews = [];
      // Iterate over each child snapshot and push the value to reviews array
      snapshot.forEach((childSnapshot) => {
        reviews.push(childSnapshot.val());
      });
      // Update reviews list and set loading to false
      setReviewsList(reviews);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, setReviewsList]);

  const renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.reviewItem}>
        <Image source={{ uri: item.poster }} style={styles.reviewPoster} />
        <View style={styles.reviewDetails}>
          <Text>
            <Text style={styles.boldText}>Title: </Text>
            {item.title}
          </Text>
          <Text>
            <Text style={styles.boldText}>Release Date: </Text>
            {item.releaseDate}
          </Text>
          <Text>
            <Text style={styles.boldText}>Review: </Text>
            {item.review}
          </Text>
          <Text>
            <Text style={styles.boldText}>Rating: </Text>
            {item.rating}
          </Text>
        </View>
      </View>
    </ScrollView>
  );

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }
  // Render the reviews list using FlatList
  return (
    <FlatList
      data={reviewsList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  reviewItem: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  reviewPoster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
  },
});
