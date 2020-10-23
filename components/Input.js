import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={[style, styles.input]} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#325ca6",
    color: "black",
  },
});
