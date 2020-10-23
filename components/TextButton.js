import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const TextButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  text: {
    color: "#04194c",
    fontWeight: "500",
    fontSize: 14,
  },
});
