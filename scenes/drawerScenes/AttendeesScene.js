import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Attendees from "../../components/Attendee";

const attendees = {
  profile: [
    { name: "Aime Malaika", picture: "../../assets/logo.png" },
    { name: "Elie Malaika", picture: "../../assets/splash.png" },
  ],
};

const AttendeesScene = () => {
  return (
    <View style={styles.container}>
      {attendees.profile.map((attendee) => (
        <Attendees
          key={attendee.name}
          name={attendee.name}
          picture={attendee.picture}
        />
      ))}
    </View>
  );
};

export default AttendeesScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
