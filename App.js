import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AppNavigation from './src/Navigator'
import { NavigationContainer } from '@react-navigation/native'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    )
  }
}

export default App