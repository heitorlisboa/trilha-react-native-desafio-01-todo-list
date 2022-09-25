import { Pressable, Text, View } from 'react-native';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

import type { TaskData } from '../../types';

type TaskProps = TaskData;

export function Task({ id, title, isComplete }: TaskProps) {
  return (
    <View
      style={[
        styles.task,
        isComplete ? styles.taskComplete : styles.taskIncomplete,
      ]}
    >
      <Pressable
        style={styles.toggleButton}
        accessibilityLabel="Concluir tarefa"
        accessibilityState={{ checked: isComplete }}
      >
        {isComplete ? (
          <>
            <View style={styles.toggleButtonPressedBackground} />
            <CheckCircle
              color={theme.colors.purple[600]}
              weight="fill"
              size={20}
            />
          </>
        ) : (
          <Circle color={theme.colors.blue[500]} weight="bold" size={20} />
        )}
      </Pressable>

      <Text
        style={[
          styles.text,
          isComplete ? styles.textTaskComplete : styles.textTaskIncomplete,
        ]}
      >
        {title}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          { backgroundColor: pressed ? theme.colors.gray[400] : 'transparent' },
        ]}
        accessibilityLabel="Deletar tarefa"
      >
        {({ pressed }) => (
          <Trash
            color={pressed ? theme.colors.danger : theme.colors.gray[300]}
            size={20}
          />
        )}
      </Pressable>
    </View>
  );
}
