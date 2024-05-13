import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Alert } from "react-native";

const ReviewInput = ({ onAddReview }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleAddReview = () => {
    if (review.trim() === "") {
      return;
    }

    const num = parseInt(rating, 10);
    if (isNaN(num) || num < 1 || num > 10) {
      Alert.alert("Invalid Rating", "Rating must be between 1 and 10.");
      return;
    }

    onAddReview({ review, rating });
    setReview("");
    setRating("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Write your review here"
        value={review}
        onChangeText={(text) => setReview(text)}
        multiline
      />
      <View style={styles.ratingContainer}>
        <Text>Rating:</Text>
        <TextInput
          style={styles.ratingInput}
          keyboardType="numeric"
          maxLength={2}
          placeholder="1-10"
          value={rating}
          onChangeText={(text) => setRating(text)}
        />
      </View>
      <Button title="Add Review" onPress={handleAddReview} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginLeft: 10,
    width: 50,
  },
});

export default ReviewInput;
