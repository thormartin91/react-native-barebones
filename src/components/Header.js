/** @flow */

'use strict'

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from './Colors';

type Props = {
    children?: any;
    style?: any;
};

export default class Header extends React.Component {

  props: Props;

  render() {
    const { children } = this.props;
    return (
      <Text style={[styles.headerText, this.props.style]}>
        {children}
      </Text>
    );
  }
  
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: Colors.darkGrey,
  }
});
