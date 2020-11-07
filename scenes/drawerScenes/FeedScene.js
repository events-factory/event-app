import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faComments,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const posts = {
  profile: [
    {
      key: "1",
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

const FeedScene = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.profile.map((post) => (
        <View
          style={{
            width: "80%",
            marginBottom: 10,
          }}
          key={post.key}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={post.picture}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />

            <Text style={styles.text}>{post.content}</Text>
          </View>
          <Image
            source={post.picture}
            style={{ width: "100%", height: 100, marginLeft: 25 }}
          />
          <View style={styles.icons}>
            <FontAwesomeIcon size={20} icon={faComments} style={styles.icon} />
            <FontAwesomeIcon size={20} icon={faEdit} style={styles.icon} />
            <FontAwesomeIcon
              size={20}
              icon={faTrashAlt}
              style={[styles.icon, { color: "#a31720" }]}
            />
          </View>
        </View>
      ))}
      <FontAwesomeIcon size={40} icon={faPlusCircle} style={styles.add} />
    </ScrollView>
  );
};

export default FeedScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    margin: 5,
    color: "#325ca6",
  },
  text: {
    color: "black",
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
