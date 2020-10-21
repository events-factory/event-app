import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Logo from "../assets/logo.jpeg";

const LoadingScene = () => {
  return (
    <View style={StyleSheet.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Text>copyright &copy; 2020...</Text>
    </View>
  );
};

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
  },
});
