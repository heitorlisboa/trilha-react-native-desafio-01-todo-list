import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[700],
    height: '100%',
  },
  header: {
    backgroundColor: theme.colors.gray[700],
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  mainContent: {
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: theme.colors.gray[600],
    padding: 24,
  },
});
