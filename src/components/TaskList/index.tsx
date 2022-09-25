import { FlatList, Text, View } from 'react-native';
import { ClipboardText } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

import type { TaskData } from '../../types';

import { Task } from '../Task';

const tasks: TaskData[] = [
  {
    id: '1',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    isComplete: false,
  },
  {
    id: '2',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    isComplete: false,
  },
  {
    id: '3',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    isComplete: false,
  },
  {
    id: '4',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    isComplete: true,
  },
  {
    id: '5',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    isComplete: true,
  },
];

export function TaskList() {
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
        <Task id={id} title={title} isComplete={isComplete} />
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
