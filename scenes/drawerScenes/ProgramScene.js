import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ProgramHeader from "../../components/ProgramHeader";
import Program from "../../components/Program";

const ProgramScene = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProgramHeader day={"First  day"} date={"31/05/2021"} />
        <Program
          hour={"14:00-14:30"}
          conference={"Conference Hell"}
          content={"Opening Remarks"}
        />
        <ProgramHeader day={"First  day"} date={"31/05/2021"} />
        <Program
          hour={"14:00-14:30"}
          conference={"Conference Hell"}
          content={"Opening Remarks"}
        />
      </ScrollView>
    </View>
  );
};

export default ProgramScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderColor: "#a31720",
    borderWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
