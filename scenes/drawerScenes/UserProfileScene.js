import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const UserProfileScene = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://scontent-mba1-1.xx.fbcdn.net/v/t31.0-8/15304405_994165557379031_7230717905270255677_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEf3RuGhtTRylL1RsH9bkin16WS3lv5Nf7XpZLeW_k1_ssawlUEzriwXeBHdzxBu6_F_azxKDNlqCTK2JgT5Xjp&_nc_ohc=tLiit9O340EAX_-v25o&_nc_ht=scontent-mba1-1.xx&oh=23d26a740f7551eff45857f0dca78b71&oe=5FBB5512",
        }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text style={[styles.title, { marginVertical: 40 }]}>
        First Name: Aime
      </Text>
      <Text style={[styles.title, { marginVertical: -20 }]}>
        Last Name: Malaika
      </Text>
    </View>
  );
};

export default UserProfileScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "#325ca6",
    fontSize: 20,
    fontWeight: "bold",
  },
});
