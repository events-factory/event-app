import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { LogoLoadingScene } from "../components/Logo";

const LoadingScene = (props) => {
  let [animating, setAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(false);
      props.navigation.navigate("AuthScene");
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <LogoLoadingScene />
      <Text style={styles.copy}>copyright &copy; 2020.</Text>
      <ActivityIndicator
        animating={animating}
        color="#fff"
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

  copy: {
    position: "absolute",
    bottom: 10,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
