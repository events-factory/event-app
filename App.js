import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import LoadingScene from "./scenes/LoadingScene";
import AuthScene from "./scenes/AuthScene";

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="loading"
          component={LoadingScene}
          initial={true}
          hideNavBar={true}
        ></Scene>
        <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
      </Stack>
    </Router>
  );
};

export default App;
