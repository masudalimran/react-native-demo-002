import { useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  // Use State
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  // Functions
  const removeFromGoalList = (item) => {
    // setGoalList(() => [...goalList].splice(goalList.indexOf(item), 1));
    let arr = [...goalList];
    arr.splice(goalList.indexOf(item), 1);
    setGoalList(arr);
  };

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <GoalInput
          goal={goal}
          setGoal={setGoal}
          goalList={goalList}
          setGoalList={setGoalList}
        />
        <View>
          {goal.length > 0 && (
            <Text style={styles.preGoal}>{goal.toUpperCase()}</Text>
          )}
          <FlatList
            data={goalList}
            keyExtractor={(item, index) => index}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  removeFromGoalList={removeFromGoalList}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
  },
  preGoal: {
    fontSize: 20,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#841584",
  },
});
