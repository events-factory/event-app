import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const ProgramHeader = ({ day, date }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text}>{day}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgramHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#a31720",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },

  text: {
    color: "white",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
