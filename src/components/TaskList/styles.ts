import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  taskList: {
    marginTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.gray[600],
    paddingBottom: 24,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdTasks: {
    color: theme.colors.blue[500],
    fontFamily: theme.fonts.bold,
  },
  finishedTasks: {
    color: theme.colors.purple[500],
    fontFamily: theme.fonts.bold,
  },
  counter: {
    backgroundColor: theme.colors.gray[400],
    marginLeft: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  counterText: {
    color: theme.colors.gray[200],
    fontFamily: theme.fonts.bold,
  },
  taskListPlaceholder: {
    alignItems: 'center',
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[400],
  },
  taskListPlaceholderIcon: {
    marginBottom: 16,
  },
  taskListPlaceholderText: {
    color: theme.colors.gray[300],
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  taskListPlaceholderTextTitle: {
    fontFamily: theme.fonts.bold,
  },
  taskListPlaceholderTextSubtitle: {
    fontFamily: theme.fonts.regular,
  },
});
