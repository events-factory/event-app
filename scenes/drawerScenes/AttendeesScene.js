import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AttendeesScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Attendees Scene</Text>
    </View>
  );
};

export default AttendeesScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
