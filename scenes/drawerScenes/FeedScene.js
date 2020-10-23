import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FeedScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Feed Scene!</Text>
    </View>
  );
};

export default FeedScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
