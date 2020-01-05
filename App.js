import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StartPage from './app/StartPage.js'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StartPage />
      </View>
    );
  }
}
