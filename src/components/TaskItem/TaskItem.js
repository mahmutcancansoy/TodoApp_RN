import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TaskItem = ({ task, isCompleted, onToggle }) => {
  return (
    <TouchableOpacity
      style={[styles.taskBox, isCompleted && styles.completedTask]}
      onPress={() => onToggle(task.id)}
    >
      <Text
        style={[styles.taskText, isCompleted && styles.completedTaskText]}
      >
        {task.task}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskBox: {
    backgroundColor: "#7da453",
    margin: 10,
    padding: 10,
    borderRadius: 4,
  },
  completedTask: {
    backgroundColor: "#37474f",
  },
  taskText: {
    color: "#ffffff",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});

export default TaskItem;
