import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, ActivityIndicator } from "react-native";
import Logo from "../assets/logo.png";

const LoadingScene = (props) => {
  let [animating, setAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(false);
      props.navigation.navigate((value = "AuthScene"));
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Text style={styles.copy}>copyright &copy; 2020.</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  copy: {
    position: "absolute",
    bottom: 10,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
