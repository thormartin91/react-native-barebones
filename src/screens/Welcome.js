/** @flow */

'use strict'

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../components/Colors';
import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';

class Welcome extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header>
          Hello, world!
        </Header>
        <Text style={styles.instructions}>
          To get started, edit {'\n'} app/screens/Welcome.js {'\n'}
          {'\n'}
          Press Cmd+R to reload, {'\n'} Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={() => Actions.counter({
            onBack: () => Actions.pop() })}
            caption={"Counter"}
        ></Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.darkGrey,
    marginBottom: 10,
  }
});

export default Welcome;
