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
      headerShown: false,
    },
  },

  ResetPasswordScene: {
    screen: ResetPasswordScene,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#fff",
        height: 70,
      },
      headerTintColor: "#325ca6",
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
