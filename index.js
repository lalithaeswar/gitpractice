/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */
import React, {Component} from 'react';

import {Text, View, AppRegistry} from 'react-native';
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{padding: 40}}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

export default HelloWorldApp;
