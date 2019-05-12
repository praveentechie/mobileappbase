import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
/** IMPORTING
* create a package.json in library folder and import as module
*/
import {trim} from 'library/utils/StringUtils';

export default class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    /** NAVIGATION
    * getParam('param_name', 'fallback_value')
    */
    const name = this.props.navigation.getParam('name', 'Anu');
    let lengthBefore = name.length,
      lengthAfter = trim(name).length;
    return (
      <View>
        <Text>Welcome {name}</Text>
        <Text>{lengthBefore} after trim {lengthAfter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
