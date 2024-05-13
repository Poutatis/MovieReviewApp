import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from "react";

import { ReviewsProvider } from "./Context/ReviewsContext";
import Auth from "./Screens/Auth";
import MovieDetails from "./Screens/MovieDetails";
import Reviews from "./Screens/Reviews";
import Search from "./Screens/Search";
import WelcomeScreen from "./Screens/Welcome";

const firebaseConfig = {
  apiKey: "AIzaSyDUnL7UdtUF8FFmuvxaR6biAa8ZcHPWAUU",
  authDomain: "moviereviewapp-84a73.firebaseapp.com",
  databaseURL:
    "https://moviereviewapp-84a73-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moviereviewapp-84a73",
  storageBucket: "moviereviewapp-84a73.appspot.com",
  messagingSenderId: "116191162829",
  appId: "1:116191162829:web:e1b71f6c3e33188c701484",
  measurementId: "G-BMC4MJSPZQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReviewsProvider>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} />
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
