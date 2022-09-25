import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  taskForm: {
    flexDirection: 'row',
    marginTop: -48,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.gray[500],
    color: theme.colors.gray[100],
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    padding: 16,
    borderRadius: 8,
  },
  button: {
    padding: 16,
    marginLeft: 8,
    borderRadius: 8,
  },
});
