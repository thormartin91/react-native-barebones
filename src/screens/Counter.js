/** @flow */

'use strict'

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import type { Action } from '../actions/types';
import { increment, decrement } from '../actions/counter';
import { Colors } from '../components/Colors';
import Text from '../components/Text';
import Header from '../components/Header';
import Button from '../components/Button';

type Props = {
  state: {
    count: number
  },
  increment: () => Action,
  decrement: () => Action
};

class CounterScreen extends React.Component {

  props: Props;

  render() {
    return (
      <View style={styles.container}>
        <Header>{ this.props.state.count }</Header>
        <Button onPress={ this.props.increment } style={{borderRadius: 50}}>
          <Text>up</Text>
        </Button>
        <Button onPress={ this.props.decrement } caption={"down"}>
        </Button>
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
  }
});


const mapStateToProps = (state) => {
  return {
    state: state.counter
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};


export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
