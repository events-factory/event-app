import React from "react";
import { StyleSheet, Text } from "react-native";

const SponsorsLink = ({ style }) => {
  return (
    <Text
      style={[styles.text, style]}
      onPress={() =>
        Linking.openURL(
          "https://eventme.eventsfactory.rw/Sponsors/5f68b1eec0bff"
        )
      }
    >
      Visite our sponsors
    </Text>
  );
};

export default SponsorsLink;

const styles = StyleSheet.create({
  text: {
    width: "90%",
    backgroundColor: "#325ca6",
    position: "absolute",
    bottom: "30%",
    left: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    padding: 10,
    fontWeight: "bold",
  },
});
