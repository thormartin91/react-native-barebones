'use strict'

import 'react-native';
import React from 'react';
import Counter from '../Counter';
import renderer from 'react-test-renderer';
import configureStore from '../../utils/configureStore';

const store = configureStore();

describe('Counter-screen', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
        <Counter store={store}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
