import { Pressable, TextInput, View } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

export function TaskForm() {
  return (
    <View style={styles.taskForm}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray[300]}
      />

      <Pressable
        style={({ pressed }) => ({
          ...styles.button,
          backgroundColor: pressed
            ? theme.colors.blue[500]
            : theme.colors.blue[600],
        })}
        accessibilityLabel="Adicionar tarefa"
      >
        <PlusCircle color={theme.colors.gray[100]} />
      </Pressable>
    </View>
  );
}
