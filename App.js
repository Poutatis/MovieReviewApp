import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { ReviewsProvider } from "./Context/ReviewsContext";
import MovieDetails from "./Screens/MovieDetails";
import Reviews from "./Screens/Reviews";
import Search from "./Screens/Search";
import WelcomeScreen from "./Screens/Welcome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReviewsProvider>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="Reviews" component={Reviews} />
        </Stack.Navigator>
      </ReviewsProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
