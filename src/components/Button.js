/** @flow */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from './Colors';
import Text from './Text';

type Props = {
  children?: any;
  caption?: string;
  style?: any;
  onPress?: () => any;
};

export default class Button extends React.Component {

  props: Props;

  render() {
    let { children } = this.props;
    if (!children) {
      children = (
        <Text style={styles.caption}>
          {this.props.caption}
        </Text>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }

}
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: Colors.lightgray,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  caption: {
    color: Colors.darkGrey,
  }
});
