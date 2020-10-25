import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import FeedScene from "./drawerScenes/FeedScene";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";
import LandingScene from "./drawerScenes/LandingScene";
import ChannelScreen from "./drawerScenes/ChatScene";
import AttendesScene from "./drawerScenes/AttendeesScene";
import ProgramScene from "./drawerScenes/ProgramScene";
import SponsorsScene from "./drawerScenes/SponsorsScene";
import UserProfileScene from "./drawerScenes/UserProfileScene";
import { Ionicons } from "@expo/vector-icons";

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: FeedScene,
    navigationOptions: ({ navigation }) => ({
      title: "Feed",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: LandingScene,
    navigationOptions: ({ navigation }) => ({
      title: "Landing",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ChannelScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Chat",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const FourthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: AttendesScene,
    navigationOptions: ({ navigation }) => ({
      title: "Attendees",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const FithActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ProgramScene,
    navigationOptions: ({ navigation }) => ({
      title: "ProgramScene",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const SixthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SponsorsScene,
    navigationOptions: ({ navigation }) => ({
      title: "Sponsors",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const SeventhActivity_StackNavigator = createStackNavigator({
  First: {
    screen: UserProfileScene,
    navigationOptions: ({ navigation }) => ({
      title: "Profile",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#325ca6",
      },
      headerTintColor: "#fff",
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    FeedScene: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "FeedScene",
      },
    },
    LandingScene: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "LandingScene",
      },
    },
    ChatScene: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "ChatScene",
      },
    },
    AttendeesScene: {
      screen: FourthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "AttendeesScene",
      },
    },
    ProgramScene: {
      screen: FithActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "ProgramScene",
      },
    },
    SponsorsScene: {
      screen: SixthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "SponsorsScene",
      },
    },
    UserProfileScene: {
      screen: SeventhActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "UserProfileScene",
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
  }
);
export default DrawerNavigatorRoutes;
