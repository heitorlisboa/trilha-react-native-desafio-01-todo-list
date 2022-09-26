import { FlatList, Text, View } from 'react-native';
import { ClipboardText } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

import type { TaskData } from '../../types';

import { Task } from '../Task';

type TaskListProps = {
  tasks: TaskData[];
  onToggleTaskCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

export function TaskList({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
}: TaskListProps) {
  const numberOfTasksCompleted = tasks.reduce((accumulator, currentTask) => {
    if (currentTask.isComplete) return accumulator + 1;
    else return accumulator;
  }, 0);

  return (
    <FlatList
      style={styles.taskList}
      data={tasks}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, title, isComplete } }) => (
        <Task
          title={title}
          isComplete={isComplete}
          onToggleTaskCompletion={() => onToggleTaskCompletion(id)}
          onDeleteTask={() => onDeleteTask(id)}
        />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.createdTasks}>Criadas </Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.finishedTasks}>Concluídas </Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{numberOfTasksCompleted}</Text>
            </View>
          </View>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.taskListPlaceholder}>
          <ClipboardText
            style={styles.taskListPlaceholderIcon}
            color={theme.colors.gray[400]}
            weight="light"
            size={56}
          />
          <Text
            style={[
              styles.taskListPlaceholderText,
              styles.taskListPlaceholderTextTitle,
            ]}
          >
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text
            style={[
              styles.taskListPlaceholderText,
              styles.taskListPlaceholderTextSubtitle,
            ]}
          >
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      }
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    />
  );
}
