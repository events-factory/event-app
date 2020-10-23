import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const FieldButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FieldButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#307ecc",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#55565a",
    color: "#fff",
  },

  text: {
    color: "#ccc",
    fontWeight: "500",
    fontSize: 17,
  },
});
