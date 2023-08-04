import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ text, deleteGoalHandler, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoalHandler(id)}
      >
        <Text style={styles.textColor}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textColor: {
    color: "white",
    padding: 8,
  },
});
