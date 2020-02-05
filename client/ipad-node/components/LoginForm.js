import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AsyncStorage } from "react-native";

const LoginForm = props => {
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const _storeData = async token => {
      try {
        await AsyncStorage.setItem("userToken", token);
      } catch (error) {
        // Error saving ID
      }
    };

    const _storeID = async id => {
      try {
        await AsyncStorage.setItem("userID", user);
      } catch (error) {
        // Error saving ID
      }
    };

    const _storeName = async name => {
      try {
        await AsyncStorage.setItem("userToken", name);
      } catch (error) {
        // Error saving ID
      }
    };

    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: emailState,
        password: passwordState
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          _storeID(res.id);
          _storeData(res.token);
          _storeName(res.name);
          Alert.alert(`Welcome ${res.name}`);
          props.navigation.navigate("AuthLoading");
        }

        if (res.emailnotfound) {
          Alert.alert(res.emailnotfound);
        }

        if (res.incorrectPassword) {
          Alert.alert(res.incorrectPassword);
        }
      })
      .catch(console.log);
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Email"
        value={emailState}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={passwordState}
        onChangeText={password => setPassword(password)}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={!submitted ? styles.button : styles.buttonSubmitted}
      >
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: "800",
            fontSize: 16
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 15,
    paddingLeft: "auto",
    paddingRight: "auto",
    width: "30%"
  },
  buttonSubmitted: {
    backgroundColor: "#25e1c5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 15,
    paddingLeft: "auto",
    paddingRight: "auto",
    width: "30%"
  },
  container: {
    marginTop: 20
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 15,
    width: "70%"
  }
});

export default LoginForm;
