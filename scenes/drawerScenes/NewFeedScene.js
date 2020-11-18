import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Input from "../../components/Input";
import FieldButton from "../../components/FieldButton";
import Loader from "../../components/Loader";

const NewFeedScene = ({ children, style, ...props }) => {
  let [post, setPost] = useState("");
  let [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button title="Pick an image" onPress={pickImage} />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>

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
