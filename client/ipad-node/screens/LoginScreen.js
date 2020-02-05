import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Login!</Text>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "900",
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  }
});

export default LoginScreen;
