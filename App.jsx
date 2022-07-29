import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  // useState
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  // Functions
  const addToGoalList = () => {
    setGoalList(() => [...goalList, goal]);
    setGoal("");
  };

  const removeFromGoalList = (item) => {
    // setGoalList(() => [...goalList].splice(index, 1));
    let arr = [...goalList];
    arr.splice(goalList.indexOf(item), 1);
    setGoalList(arr);
  };

  return (
    <View style={styles.appContainer}>
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
      <View>
        {goal.length > 0 && (
          <Text style={styles.preGoal}>{goal.toUpperCase()}</Text>
        )}
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => index}
          renderItem={(itemData) => {
            return (
              <View style={styles.finalGoals}>
                <Text
                  style={styles.finalGoalsText}
                  onPress={() => removeFromGoalList(itemData.item)}
                >
                  {itemData.item.toUpperCase()}
                </Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
  },
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
  preGoal: {
    fontSize: 20,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#841584",
  },
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
});
