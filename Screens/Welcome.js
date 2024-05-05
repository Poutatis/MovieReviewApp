import React from "react";
import { View, Text, Button } from "react-native";

export default function WelcomeScreen({ navigation }) {
  const goToSearch = () => {
    navigation.navigate("Search");
  };

  const goToReviews = () => {
    navigation.navigate("Reviews");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Movie Review App</Text>
      <Button title="Movie Search" onPress={goToSearch} />
      <Button title="Review List" onPress={goToReviews} />
    </View>
  );
}
