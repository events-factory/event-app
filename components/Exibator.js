import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Exibator = ({ src, firstText, secondText, style }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[{ width: "100%", marginVertical: -110 }, style]}
        source={src}
        resizeMode="contain"
      />
      <Text style={styles.text}>{firstText}</Text>
      <Text style={[styles.text, { fontSize: 15, marginVertical: 10 }]}>
        {secondText}
      </Text>
    </View>
  );
};

export default Exibator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    color: "#17a2b8",
    fontSize: 20,
    fontWeight: "bold",
  },
});
