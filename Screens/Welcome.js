import React from "react";
import { View, Text, Button } from "react-native";

export default function WelcomeScreen({ navigation }) {
  const goToSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Your Movie App!</Text>
      <Button title="Get Started" onPress={goToSearch} />
    </View>
  );
}
