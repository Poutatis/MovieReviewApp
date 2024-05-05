import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

const ReviewInput = ({ onAddReview }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleAddReview = () => {
    if (review.trim() === "" || rating.trim() === "") {
      return;
    }
    onAddReview({ review, rating });
    setReview("");
    setRating("");
  };

  const validateRating = (text) => {
    const num = parseInt(text, 10);
    if (num >= 1 && num <= 10) {
      setRating(text);
    }
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
          onChangeText={(text) => validateRating(text)}
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
