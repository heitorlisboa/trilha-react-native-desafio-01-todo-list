import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  task: {
    backgroundColor: theme.colors.gray[500],
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    paddingRight: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  taskIncomplete: {
    borderColor: theme.colors.gray[400],
  },
  taskComplete: {
    borderColor: 'transparent',
  },
  toggleButton: {
    position: 'relative',
  },
  toggleButtonPressedBackground: {
    backgroundColor: theme.colors.gray[100],
    position: 'absolute',
    width: 10,
    height: 10,
    top: 5,
    left: 5,
  },
  text: {
    flexShrink: 1,
    flexGrow: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    marginHorizontal: 8,
  },
  textTaskIncomplete: {
    color: theme.colors.gray[100],
  },
  textTaskComplete: {
    color: theme.colors.gray[300],
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
  },
});
