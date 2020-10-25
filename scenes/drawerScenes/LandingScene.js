import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../../assets/sponsor.jpg";
import SponsorsLink from "../../components/SponsorsLink";

const LandingScene = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <SponsorsLink />
    </View>
  );
};

export default LandingScene;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: "-20%",
    left: "5%",
    width: "90%",
    height: "100%",
  },

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
