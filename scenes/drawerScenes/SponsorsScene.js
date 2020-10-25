import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import Img from "../../assets/sponsors.jpeg";
import Insurance from "../../assets/insurance.jpg";
import Lody from "../../assets/lody.jpeg";
import Logo from "../../assets/sponsor.jpg";
import Sponsor from "../../components/Sponsor";
import Exibator from "../../components/Exibator";

const SponsorsScene = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Sponsor src={Insurance} />
          <Sponsor src={Lody} />
          <Sponsor src={Logo} />
        </View>
        <Exibator
          src={Img}
          firstText="EXHIBITION BOOTH 3X3"
          secondText="1500 USD"
        />
        <Exibator
          src={Img}
          firstText="EXHIBITION BOOTH 3X3"
          secondText="1500 USD"
        />
      </ScrollView>
    </View>
  );
};

export default SponsorsScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
