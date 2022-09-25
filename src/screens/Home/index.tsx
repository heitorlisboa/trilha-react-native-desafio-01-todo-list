import { SafeAreaView, View } from 'react-native';

import { styles } from './styles';

import TodoLogo from '../../assets/todo-logo.svg';
import { TaskForm } from '../../components/TaskForm';
import { TaskList } from '../../components/TaskList';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TodoLogo />
      </View>

      <View style={styles.mainContent}>
        <TaskForm />
        <TaskList />
      </View>
    </SafeAreaView>
  );
}
