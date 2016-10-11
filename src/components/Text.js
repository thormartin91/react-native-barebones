/** @flow */

'use strict'

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { Colors } from './Colors.js';

type Props = {
    children?: any;
    style?: any;
};

export default class Text extends React.Component {

  props: Props;

  render() {
    const { children } = this.props;
    return (
      <RNText style={[styles.normalText, this.props.style]}>
        {children}
      </RNText>
    );
  }
  
}

const styles = StyleSheet.create({
  normalText: {
    color: Colors.darkGrey,
  }
});
