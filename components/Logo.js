import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import LogoImg from "../assets/logo.png";

const Logo = () => {
  return <Image style={styles.logo} resizeMode="contain" source={LogoImg} />;
};

const LogoLoadingScene = () => {
  return <Image style={styles.logoLoader} resizeMode="contain" source={LogoImg} />;
};
export {
  Logo,
  LogoLoadingScene,
}
const styles = StyleSheet.create({
  logo: {
    padding: 0,
    margin: 0,
    width: 200,
    height: 200,
  },
  logoLoader: {
    padding: 0,
    margin: 0,
    width: 300,
    height: 300,
  }
});
