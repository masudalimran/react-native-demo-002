import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ itemData, removeFromGoalList }) {
  return (
    <Pressable
      onPress={() => removeFromGoalList(itemData.item)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.finalGoals}>
        <Text style={styles.finalGoalsText}>{itemData.item.toUpperCase()}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  finalGoals: {
    marginVertical: 5,
  },
  finalGoalsText: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#841584",
    color: "#fff",
    borderRadius: 10,
  },
  pressedItem: {
    backgroundColor: "#000",
    borderRadius: 10,
  },
});
