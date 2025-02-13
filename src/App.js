import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskInput from "./components/TaskInput/TaskInput";

const App =() => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addToTask = (taskText) => {
    setTasks([...tasks, { id: Date.now().toString(), task: taskText }]);
  };

  const toggleTaskCompletion = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appTitle}>Yapılacaklar</Text>
        <Text style={styles.taskValue}>{tasks.length - completedTasks.length}</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            isCompleted={completedTasks.includes(item.id)}
            onToggle={toggleTaskCompletion}
          />
        )}
      />

      <TaskInput onAddTask={addToTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f2027",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#ffa500",
  },
  taskValue: {
    fontSize: 30,
    fontWeight: "500",
    color: "#ffa500",
  },
});

export default App;
