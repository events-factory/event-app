import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Program = ({ hour, conference, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{hour}</Text>
        <Text style={styles.text}>{conference}</Text>
      </View>
      <Text style={{ textTransform: "uppercase", padding: 10 }}>{content}</Text>
    </View>
  );
};

export default Program;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f6f6f6",
  },
  header: {
    backgroundColor: "#ccc",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  text: {
    color: "black",
    textAlign: "center",
    fontSize: 17,
  },
});
