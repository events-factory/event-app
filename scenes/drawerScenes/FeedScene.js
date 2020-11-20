import React, { useState } from "react";
import { View, Alert, StyleSheet, Image, Text, ScrollView } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faComments,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const posts = {
  profile: [
    {
      key: "1",
      name: "Aime",
      date: "15-11-2020",
      picture: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t31.0-8/15304405_994165557379031_7230717905270255677_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEf3RuGhtTRylL1RsH9bkin16WS3lv5Nf7XpZLeW_k1_ssawlUEzriwXeBHdzxBu6_F_azxKDNlqCTK2JgT5Xjp&_nc_ohc=tLiit9O340EAX_-v25o&_nc_ht=scontent-mba1-1.xx&oh=23d26a740f7551eff45857f0dca78b71&oe=5FBB5512",
      },
      image: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t31.0-8/15304405_994165557379031_7230717905270255677_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEf3RuGhtTRylL1RsH9bkin16WS3lv5Nf7XpZLeW_k1_ssawlUEzriwXeBHdzxBu6_F_azxKDNlqCTK2JgT5Xjp&_nc_ohc=tLiit9O340EAX_-v25o&_nc_ht=scontent-mba1-1.xx&oh=23d26a740f7551eff45857f0dca78b71&oe=5FBB5512",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sit!",
    },
    {
      key: "2",
      name: "Adeline",
      date: "15-11-2020",
      picture: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t1.0-9/119214530_1221995164832117_961476674865061706_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeExxRImR8sm95q-SCTPlfOAnnis_pLXMD6eeKz-ktcwPlVfbTYLQeXyYeK-j73SSI9_R57HKiBQuW-CcphlPNTT&_nc_ohc=dXGAQRyt2kwAX8KJql4&_nc_ht=scontent-mba1-1.xx&oh=5025f95c026ece042d532ac7e160e674&oe=5FBA469B",
      },
      image: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t1.0-9/119214530_1221995164832117_961476674865061706_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeExxRImR8sm95q-SCTPlfOAnnis_pLXMD6eeKz-ktcwPlVfbTYLQeXyYeK-j73SSI9_R57HKiBQuW-CcphlPNTT&_nc_ohc=dXGAQRyt2kwAX8KJql4&_nc_ht=scontent-mba1-1.xx&oh=5025f95c026ece042d532ac7e160e674&oe=5FBA469B",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat reprehenderit, animi officiis alias non? Porro nobis earum, neque quos id cum necessitatibus quae ipsa excepturi consequatur praesentium, alias fugit!",
    },
  ],
};

const FeedScene = ({ ...props }) => {
  const [pubs, setPubs] = useState(posts.profile);
  const filterPubs = () => setPubs(pubs.filter((pub) => pub.id));

  const handleDelete = () => {
    Alert.alert(
      "Delete post",
      "Are you sure to delete this post?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => filterPubs(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {pubs.map((post) => (
          <View
            style={{
              width: "100%",
              marginBottom: 10,
              backgroundColor: "#f8f8ff",
            }}
            key={post.key}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Image
                  source={post.image}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>

              <View style={{ width: "80%", marginRight: "5%" }}>
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  {post.name}

                  <Text
                    style={[
                      styles.text,
                      { fontWeight: "bold", textAlign: "right" },
                    ]}
                  >
                    {post.date}
                  </Text>
                </Text>

                <Text style={styles.text}>
                  {post.content}
                  {"\n"}
                </Text>
              </View>
            </View>
            <Image
              source={post.picture}
              style={{ width: "80%", height: 200, marginLeft: "15%" }}
            />
            <View style={styles.icons}>
              <FontAwesomeIcon
                size={20}
                icon={faComments}
                style={styles.icon}
                onPress={() => props.navigation.navigate("CommentScene")}
              />
              <FontAwesomeIcon
                size={20}
                icon={faEdit}
                style={styles.icon}
                onPress={() => props.navigation.navigate("NewFeedScene")}
              />
              <FontAwesomeIcon
                size={20}
                icon={faTrashAlt}
                style={[styles.icon, { color: "#a31720" }]}
                onPress={handleDelete}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <FontAwesomeIcon
        size={40}
        icon={faPlusCircle}
        style={styles.add}
        onPress={() => props.navigation.navigate("NewFeedScene")}
      />
    </View>
  );
};

export default FeedScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    margin: 10,
    padding: 10,
    color: "#325ca6",
  },
  text: {
    color: "black",
    lineHeight: 20,
    fontSize: 15,
    width: "100%",
    marginLeft: 10,
  },
  add: {
    position: "absolute",
    bottom: 5,
    right: 5,
    color: "green",
  },
});
