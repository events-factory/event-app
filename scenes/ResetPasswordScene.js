import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Input from "../components/Input";
import Logo from "../assets/logo.png";
import FieldButton from "../components/FieldButton";
import Error from "../components/Error";

const ResetPasswordScene = ({ children, style, ...props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Error error={""} />
      <Input style={styles.input} placeholder={"Registration code"} />
      <FieldButton
        style={styles.loginButton}
        title={"Reset Password"}
        onPress={() => {}}
      />
    </View>
  );
};

export default ResetPasswordScene;

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
  loginButton: {
    marginVertical: 40,
  },
});
