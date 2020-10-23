import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../components/Input";
import {Logo} from "../components/Logo";
import FieldButton from "../components/FieldButton";
import TextButton from "../components/TextButton";
import Error from "../components/Error";
import Loader from "../components/Loader";

const AuthScene = ({ children, style, ...props }) => {
  let [userCode, setUserCode] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  const handleSubmitPress = () => {
    if (!userCode) {
      alert("Please fill Registration code");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    if (userCode && userPassword !== "theo") {
      setError(true);
      setLoading(false);
      return;
    }
    props.navigation.navigate("FeedScene");
    setLoading(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView style={styles.container} enabled>
          <Logo />
          {error && (userCode && userPassword) !== "theo" && (
            <Error error={"code and pass word must be filled with theo"} />
          )}
          <Input
            style={styles.firstInput}
            onChangeText={(userRegistCode) => setUserCode(userRegistCode)}
            placeholder={"Registration code"}
            blurOnSubmit={false}
          />
          <Input
            style={styles.input}
            placeholder={"Password"}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            blurOnSubmit={false}
            secureTextEntry
          />
          <FieldButton
            style={styles.loginButton}
            title={"Login"}
            onPress={handleSubmitPress}
          />
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
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 50,
  },
  firstInput: {
    width: "90%",
    marginTop: 40,
  },
  input: {
    width: "90%",
  },
  loginButton: {
    marginVertical: 40,
  },
});
