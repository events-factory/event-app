import React from "react";
import LoadingScene from "./scenes/LoadingScene";
import AuthScene from "./scenes/AuthScene";
import ResetPasswordScene from "./scenes/ResetPasswordScene";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Auth = createStackNavigator({
  AuthScene: {
    screen: AuthScene,
    navigationOptions: {
      title: "Login",
      headerStyle: {
        backgroundColor: "#ddd",
      },
      headerTintColor: "#2f609b",
    },
  },

  ResetPasswordScene: {
    screen: ResetPasswordScene,
    navigationOptions: {
      title: "Reset Password",
      headerStyle: {
        backgroundColor: "#ddd",
      },
      headerTintColor: "#2f609b",
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
