import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScannerScreen from './screens/ScannerScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <Screen/>
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  QrCodeScanner: {screen: ScannerScreen},
});

const Screen  =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
