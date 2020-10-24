import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SponsorsScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Sponsors</Text>
    </View>
  );
};

export default SponsorsScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
