// @refresh reset
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  LogBox,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvqfOf4JDW3UPop68AIqJRoLju_uqCoWI",
  authDomain: "event-app-9f66e.firebaseapp.com",
  databaseURL: "https://event-app-9f66e.firebaseio.com",
  projectId: "event-app-9f66e",
  storageBucket: "event-app-9f66e.appspot.com",
  messagingSenderId: "698030463979",
  appId: "1:698030463979:web:95faf25fa5b7cf9e7717ae",
  measurementId: "G-5PJT7L24JX",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
}

//LogBox.ignoreWarnings(["Setting a timer for a long period of time"]);

// const db = firebase.firestore();
// const chatRef = db.collection("chats");

const ChannelScreen = () => {
  //   const [user, setUser] = useState(null);
  //const [name, setName] = useState("");
  //   const [messages, setMessages] = useState([]);
  //   useEffect(() => {
  //     //readUser();
  //     const unsubscribe = chatRef.onSnapshot((querySnapshot) => {
  //       const messagesFirestore = querySnapshot
  //         .docChanges()
  //         .filter(({ type }) => type === "added")
  //         .map(({ doc }) => {
  //           const message = doc.data();
  //           return { ...message, createdAt: message.createdAt.toDate() };
  //         })
  //         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  //       appendMessages(messagesFirestore);
  //     });
  //     return () => unsubscribe();
  //   }, []);
  //   const appendMessages = useCallback(
  //     (messages) => {
  //       setMessages((previousMessages) =>
  //         GiftedChat.append(previousMessages, messages)
  //       );
  //     },
  //     [messages]
  //   );
  //   async function handleSend(messages) {
  //     const writes = messages.map((m) => chatsRef.add(m));
  //     await Promise.all(writes);
  //   }
  // async function readUser() {
  //   const user = await AsyncStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }
  //return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
  return <GiftedChat />;
};

export default ChannelScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 30,
//   },
//   input: {
//     height: 50,
//     width: "100%",
//     borderWidth: 1,
//     padding: 15,
//     borderColor: "gary",
//   },
// });
