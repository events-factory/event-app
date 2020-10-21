import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../assets/logo.jpeg";

const AuthScene = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Text>Authentication scene </Text>
    </View>
  );
};

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  logo: {
    width: 200,
  },
});
