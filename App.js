/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './src/screens/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
