import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../components/Input";
import Logo from "../components/Logo";
import FieldButton from "../components/FieldButton";
import TextButton from "../components/TextButton";
import Error from "../components/Error";
import Loader from "../components/Loader";

const AuthScene = ({ children, style, ...props }) => {
  let [loading] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView style={styles.container} enabled>
          <Logo />
          <Error error={""} />
          <Input style={styles.input} placeholder={"Registration code"} />
          <Input
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry
          />
          <FieldButton style={styles.loginButton} title={"Login"} />
          <TextButton
            title={"Don't remeber your password? Reset it here"}
            onPress={() => {
              props.navigation.navigate("ResetPasswordScene");
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 40,
  },
  input: {
    width: "90%",
  },
  loginButton: {
    marginVertical: 40,
  },
});
