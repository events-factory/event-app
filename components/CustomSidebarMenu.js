import React from "react";

import { View, StyleSheet, Text, Alert } from "react-native";

const CustomSidebarMenu = (props) => {
  let items = [
    {
      navOptionName: "Feed",
      screenToNavigate: "FeedScene",
    },
    {
      navOptionName: "Profile",
      screenToNavigate: "UserProfileScene",
    },
    {
      navOptionName: "Landing",
      screenToNavigate: "LandingScene",
    },
    {
      navOptionName: "Chat",
      screenToNavigate: "ChatScene",
    },
    {
      navOptionName: "Attendees",
      screenToNavigate: "AttendeesScene",
    },
    {
      navOptionName: "Program",
      screenToNavigate: "ProgramScene",
    },
    {
      navOptionName: "Sponsors",
      screenToNavigate: "SponsorsScene",
    },
    {
      navOptionName: "Logout",
      screenToNavigate: "logout",
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == "logout") {
      props.navigation.toggleDrawer();
      Alert.alert(
        "Logout",
        "Are you sure? You want to logout?",
        [
          {
            text: "Cancel",
            onPress: () => {
              return null;
            },
          },
          {
            text: "Confirm",
            onPress: () => {
              //AsyncStorage.clear();
              props.navigation.navigate("Auth");
              console.log("logout");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: "#325ca6" }}>
            {"About React".charAt(0)}
          </Text>
        </View>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: "100%", flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              color: "white",
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? "#4b9ff2"
                  : "#325ca6",
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#325ca6",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#325ca6",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
    marginBottom: 10,
  },
});
export default CustomSidebarMenu;
