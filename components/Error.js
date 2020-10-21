import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  text: {
    color: "red",
    fontWeight: "bold",
  },
});
