import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import FeedScene from "./drawerScenes/FeedScene";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: FeedScene,
    navigationOptions: ({ navigation }) => ({
      title: "Feed",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});

// const SecondActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: SettingsScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: "Setting Screen",
//       headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: "#307ecc",
//       },
//       headerTintColor: "#fff",
//     }),
//   },
// });

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    FeedScene: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Feed",
      },
    },
    // SettingsScreen: {
    //   screen: SecondActivity_StackNavigator,
    //   navigationOptions: {
    //     drawerLabel: "Setting Screen",
    //   },
    // },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
  }
);
export default DrawerNavigatorRoutes;
