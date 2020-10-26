import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const AttendeeProfileScene = ({ name, picture }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image source={picture} />
    </View>
  );
};

export default AttendeeProfileScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
