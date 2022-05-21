 import React from 'react';
import { StyleSheet } from 'react-native'


import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GuestStack from './navigation/GuestStack'

const Stack = createStackNavigator();
export default function AppContainer() {
  return (
    <Provider>
      <NavigationContainer>
        <GuestStack />
      </NavigationContainer>
    </Provider>
  )
}