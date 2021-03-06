import React, { useState } from "react";

import { View, StyleSheet, FlatList } from "react-native";
import Attendee from "../../components/Attendee";

const attendees = {
  profile: [
    {
      key: "1",
      name: "Aime Malaika",
      picture: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t31.0-8/15304405_994165557379031_7230717905270255677_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEf3RuGhtTRylL1RsH9bkin16WS3lv5Nf7XpZLeW_k1_ssawlUEzriwXeBHdzxBu6_F_azxKDNlqCTK2JgT5Xjp&_nc_ohc=tLiit9O340EAX_-v25o&_nc_ht=scontent-mba1-1.xx&oh=23d26a740f7551eff45857f0dca78b71&oe=5FBB5512",
      },
    },
    {
      key: "2",
      name: "Adeline Mukeshimana",
      picture: {
        uri:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t1.0-9/119214530_1221995164832117_961476674865061706_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeExxRImR8sm95q-SCTPlfOAnnis_pLXMD6eeKz-ktcwPlVfbTYLQeXyYeK-j73SSI9_R57HKiBQuW-CcphlPNTT&_nc_ohc=dXGAQRyt2kwAX8KJql4&_nc_ht=scontent-mba1-1.xx&oh=5025f95c026ece042d532ac7e160e674&oe=5FBA469B",
      },
    },
  ],
};

const AttendeesScene = ({ navigation }) => {
  const [attend, setAttend] = useState(attendees.profile);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        data={attend}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Attendee
            name={item.name}
            picture={item.picture}
            onPress={() => navigation.navigate("AttendeeProfileScene", item)}
          />
        )}
      />
    </View>
  );
};

export default AttendeesScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
