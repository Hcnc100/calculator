/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { AppTheme } from './config/theme/app-theme';


function App(): React.JSX.Element {


  return (
    <View style={AppTheme.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />

      <CalculatorScreen />

    </View>
  );
}


export default App;
