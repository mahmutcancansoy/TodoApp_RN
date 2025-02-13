import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.taskInput}
        placeholder="Yapılacaklar..."
        placeholderTextColor="#808080"
      />
      <TouchableOpacity
        style={[
          styles.addButton,
          input.trim() ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={handleAdd}
        disabled={!input.trim()}
      >
        <Text style={styles.addButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#37474f",
    margin: 10,
    padding: 10,
    borderRadius: 12,
  },
  taskInput: {
    color: "#ffffff",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  addButton: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#ffa500",
  },
  inactiveButton: {
    backgroundColor: "#808080",
  },
  addButtonText: {
    color: "#ffffff",
  },
});

export default TaskInput;
