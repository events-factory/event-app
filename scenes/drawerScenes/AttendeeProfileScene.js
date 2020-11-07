import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const AttendeeProfileScene = ({ navigation }) => {
  //const picture = navigation.getParam("picture");

  console.log(navigation.getParam("name"));

  return (
    <View style={styles.container}>
      <Text>Hello {navigation.getParam("name")}</Text>
    </View>
  );
};

export default AttendeeProfileScene;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
