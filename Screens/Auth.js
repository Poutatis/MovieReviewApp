import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { getDatabase } from "@firebase/database";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

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
export const database = getDatabase(app);

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully!");
        navigation.navigate("Welcome");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully!");
        navigation.navigate("Welcome");
      }
    } catch (error) {
      Alert.alert("Authentication error:", error.message);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? "Sign In" : "Sign Up"}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? "Sign In" : "Sign Up"}
          onPress={handleAuthentication}
          color="#3498db"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
});

export default AuthScreen;
