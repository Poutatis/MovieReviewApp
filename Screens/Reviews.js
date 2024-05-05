import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ReviewsContext from "../Context/ReviewsContext";

export default function Reviews() {
  const { reviewsList } = useContext(ReviewsContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Reviews List</Text>
        {reviewsList.map((item, index) => (
          <View key={index} style={styles.reviewItem}>
            <Image source={{ uri: item.poster }} style={styles.reviewPoster} />
            <View style={styles.reviewDetails}>
              <Text>{item.title}</Text>
              <Text>{item.releaseDate}</Text>
              <Text>Review: {item.review}</Text>
              <Text>Rating: {item.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reviewItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  reviewPoster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1,
  },
});
