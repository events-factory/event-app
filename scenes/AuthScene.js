import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Input from "../components/Input";
import Logo from "../assets/logo.png";
import FieldButton from "../components/FieldButton";

const AuthScene = ({ children, style, ...props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FieldButton title={"Login"} />
    </View>
  );
};

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    borderColor: "#000",
    padding: 0,
    margin: 0,
    width: 200,
    height: 200,
  },
  input: {
    width: "90%",
  },
});
