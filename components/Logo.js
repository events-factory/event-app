import React from "react";
import { Image, StyleSheet } from "react-native";
import LogoImg from "../assets/logo.png";

const Logo = () => {
  return <Image style={styles.logo} resizeMode="contain" source={LogoImg} />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    padding: 0,
    margin: 0,
    width: 100,
    height: 100,
  },
});
