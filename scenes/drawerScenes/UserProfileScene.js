import React from "react";
import { View, StyleSheet, Text } from "react-native";

const UserProfileScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello User Profile Scene</Text>
    </View>
  );
};

export default UserProfileScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
