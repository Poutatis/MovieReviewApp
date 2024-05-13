import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useContext, useState } from "react";
import { Text, View, Image, FlatList, StyleSheet, ScrollView } from "react-native";

import ReviewsContext from "../Context/ReviewsContext";

export default function Reviews() {
  const { reviewsList, setReviewsList } = useContext(ReviewsContext);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const db = getDatabase();
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }
    const reviewsRef = ref(db, `users/${user.uid}/reviews`);
    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const reviews = [];
      snapshot.forEach((childSnapshot) => {
        reviews.push(childSnapshot.val());
      });
      setReviewsList(reviews);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, setReviewsList]);

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }

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
    fontWeight: 'bold',
  },
});
