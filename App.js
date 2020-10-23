import React from "react";
import LoadingScene from "./scenes/LoadingScene";
import AuthScene from "./scenes/AuthScene";
import ResetPasswordScene from "./scenes/ResetPasswordScene";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DrawerNavigationRoutes from "./scenes/DrawerNavigationRoutes";

const Auth = createStackNavigator({
  AuthScene: {
    screen: AuthScene,
    navigationOptions: {
      title: "Login",
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    },
  },

  ResetPasswordScene: {
    screen: ResetPasswordScene,
    navigationOptions: {
      title: "Reset Password",
      headerStyle: {
        backgroundColor: "#307ecc",
        
      },
      headerTintColor: "#fff",
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
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
