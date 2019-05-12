import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import palette from 'res/palette';

export default class WelcomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to timer app!</Text>
        <Text style={styles.welcome}>You are in welcome page with nav</Text>
        <Button title="View AP's profile"
          onPress={() => navigate('UserInfoScreen', {name: 'AP  '})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    ...palette.heading,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
