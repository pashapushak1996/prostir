/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from '@shopify/restyle';

import theme from '../../theme.ts';
import Navigation from '@app/containers/core/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {flex: 1, flexGrow: 1},
});

export default App;
