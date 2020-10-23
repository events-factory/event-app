import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../components/Input";
import FieldButton from "../components/FieldButton";
import Error from "../components/Error";
import Logo from "../components/Logo";

const ResetPasswordScene = ({ children, style, ...props }) => {
  return (
    <View style={styles.container}>
      <Logo />
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
    paddingTop: 40,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "90%",
  },
  loginButton: {
    marginVertical: 40,
  },
});
