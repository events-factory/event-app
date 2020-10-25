import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import Img from "../../assets/sponsors.jpeg";
import Insurance from "../../assets/insurance.jpg";
import Lody from "../../assets/lody.jpeg";
import Logo from "../../assets/sponsor.jpg";
import Australia from "../../assets/australia.jpg";
import Standard from "../../assets/standard.jpg";
import Sponsor from "../../components/Sponsor";
import Exibator from "../../components/Exibator";
import SponsorsLink from "../../components/SponsorsLink";

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
          src={Australia}
          firstText="AUSTRALIA MEETING ROOM"
          secondText="2500 USD"
        />
        <Exibator
          src={Standard}
          style={{ marginVertical: -30 }}
          firstText="STANDARD MEETING ROOM"
          secondText="450 USD"
        />
        <Exibator
          src={Img}
          style={{ marginVertical: -15 }}
          firstText="EXHIBITION BOOTH 3X3"
          secondText="1500 USD"
        />
        <SponsorsLink
          style={{ position: "relative", marginVertical: 10, bottom: 0 }}
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
