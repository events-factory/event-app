import React from "react";
import Logo from "../../assets/sponsor.jpg";
import { View, StyleSheet, Text, Image, Linking } from "react-native";

const LandingScene = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Logo} />
      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL(
            "https://eventme.eventsfactory.rw/Sponsors/5f68b1eec0bff"
          )
        }
      >
        Visite our sponsors
      </Text>
    </View>
  );
};

export default LandingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: -170,
    left: "5%",
    width: "90%",
    height: "100%",
  },

  text: {
    width: "90%",
    backgroundColor: "#325ca6",
    position: "absolute",
    bottom: 280,
    left: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    padding: 10,
    fontWeight: "bold",
  },
});
