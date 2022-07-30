import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function GoalInput({ goal, setGoal, goalList, setGoalList }) {
  //   Functions
  const addToGoalList = () => {
    setGoalList(() => [...goalList, goal]);
    setGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        value={goal}
        onChangeText={(enteredText) => setGoal(enteredText)}
        autoFocus
        clearButtonMode="always"
      />
      <Button
        title="Add Goal"
        color="#841584"
        onPress={addToGoalList}
        disabled={goal.length > 0 ? false : true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
