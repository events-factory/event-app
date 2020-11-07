import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../../components/Input";
import FieldButton from "../../components/FieldButton";
import Loader from "../../components/Loader";

const NewFeedScene = ({ children, style, ...props }) => {
  let [post, setPost] = useState("");
  let [loading, setLoading] = useState(false);

  const handleSubmitPress = () => {
    if (!post) {
      alert("Please fill the post");
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
          <Input
            style={styles.firstInput}
            onChangeText={(content) => setPost(content)}
            placeholder={"Write your message post here"}
            multiline={true}
            numberOfLines={8}
            blurOnSubmit={false}
          />

          <FieldButton
            style={styles.loginButton}
            title={"Post"}
            onPress={handleSubmitPress}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default NewFeedScene;

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
    textAlignVertical: "top",
  },

  loginButton: {
    marginVertical: 40,
  },
});
