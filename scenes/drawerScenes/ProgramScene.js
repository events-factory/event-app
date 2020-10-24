import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProgramScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Program Scene</Text>
    </View>
  );
};

export default ProgramScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
