import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Attendee = ({ name, picture }) => {
  return (
    <View style={styles.container}>
      <Image
        source={picture}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Attendee;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },

  text: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
  },
});
