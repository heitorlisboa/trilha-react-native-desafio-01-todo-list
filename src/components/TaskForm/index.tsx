import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';
import { v4 as uuidV4 } from 'uuid';

import { styles } from './styles';
import { theme } from '../../theme';

import type { TaskData } from '../../types';

type TaskFormProps = {
  onCreateTask: (newTask: TaskData) => void;
};

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateTask() {
    // Creating the task
    onCreateTask({
      id: uuidV4(),
      title: newTaskTitle,
      isComplete: false,
    });

    // Clearing the input
    setNewTaskTitle('');
  }

  return (
    <View style={styles.taskForm}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray[300]}
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
      />

      <Pressable
        style={({ pressed }) => ({
          ...styles.button,
          backgroundColor: pressed
            ? theme.colors.blue[500]
            : theme.colors.blue[600],
        })}
        onPress={handleCreateTask}
        accessibilityLabel="Adicionar tarefa"
      >
        <PlusCircle color={theme.colors.gray[100]} />
      </Pressable>
    </View>
  );
}
