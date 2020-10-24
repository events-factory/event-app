import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import FeedScene from "./drawerScenes/FeedScene";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";
import LandingScene from "./drawerScenes/LandingScene";
import ChannelScreen from "./drawerScenes/ChatScene";

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
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
  }
);
export default DrawerNavigatorRoutes;
