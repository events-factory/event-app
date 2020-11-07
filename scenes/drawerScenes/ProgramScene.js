import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ProgramHeader from "../../components/ProgramHeader";
import Program from "../../components/Program";

const ProgramScene = () => {
  const programs = {
    container: [
      {
        day: "Day 1",
        date: "31/05/2021",
        actions: [
          {
            hour: "14:00-14:30",
            conference: "Conference Hell",
            content: "Opening Remarks",
          },
          {
            hour: "15:00-16:00",
            conference: "Conference Hell",
            content:
              "Session I: legal aspects of life insurance in the digital world. absolute do's and dont's",
          },
          {
            hour: "16:00-17:00",
            conference: "Conference Hell",
            content: "Tea break",
          },
        ],
      },
      {
        day: "Day 2",
        date: "01/06/2021",
        actions: [
          {
            hour: "10:00-14:30",
            conference: "King Fish",
            content:
              "Session II: life assurance penetration levels remain very low in africa. where are we getting wrong?",
          },
          {
            hour: "15:00-15:30",
            conference: "Gifa Hell",
            content: "Tour of Africa/survey reports",
          },
          {
            hour: "16:00-17:00",
            conference: "Conference Hell",
            content: "Tea break",
          },
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {programs.container.map((program) => (
          <View>
            <ProgramHeader
              key={program.day}
              day={program.day}
              date={program.date}
            />
            {program.actions.map((action) => (
              <Program
                key={action.hour}
                hour={action.hour}
                conference={action.conference}
                content={action.content}
              />
            ))}
          </View>
        ))}
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
