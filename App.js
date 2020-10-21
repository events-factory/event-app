import React from "react";
import LoadingScene from "./scenes/LoadingScene";
import AuthScene from "./scenes/AuthScene";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Auth = createStackNavigator({
  AuthScene: {
    screen: AuthScene,
    navigationOptions: {
      title: "Login",
      headerStyle: {
        backgroundColor: "#04194c",
      },
      headerTintColor: "#ccc",
    },
  },
});

const App = createSwitchNavigator({
  LoadingScene: {
    screen: LoadingScene,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {
    screen: Auth,
  },
});

export default createAppContainer(App);
