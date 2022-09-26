import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { styles } from './styles';

import type { TaskData } from '../../types';

import TodoLogo from '../../assets/todo-logo.svg';
import { TaskForm } from '../../components/TaskForm';
import { TaskList } from '../../components/TaskList';

export function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleCreateTask(newTask: TaskData) {
    setTasks((prevTasks) => {
      const tasksWithNewOne = [newTask, ...prevTasks];
      return tasksWithNewOne;
    });
  }

  function handleToggleTaskCompletion(taskId: string) {
    setTasks((prevTasks) => {
      const tasksWithModifiedOne = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
      return tasksWithModifiedOne;
    });
  }

  function handleDeleteTask(taskId: string) {
    setTasks((prevTasks) => {
      const tasksWithoutDeletedOne = prevTasks.filter(
        (task) => task.id !== taskId
      );
      return tasksWithoutDeletedOne;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TodoLogo />
      </View>

      <View style={styles.mainContent}>
        <TaskForm onCreateTask={handleCreateTask} />
        <TaskList
          tasks={tasks}
          onToggleTaskCompletion={handleToggleTaskCompletion}
          onDeleteTask={handleDeleteTask}
        />
      </View>
    </SafeAreaView>
  );
}
