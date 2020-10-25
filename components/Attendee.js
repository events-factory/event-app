import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Attendee = ({ name, picture }) => {
  return (
    <View style={styles.container}>
      <Image
        source={picture}
        resizeMode="contain"
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Attendee;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
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
