/** @flow */

'use strict'

import React from 'react';
import { Scene } from 'react-native-router-flux';
import Counter from '../screens/Counter';

export const counter = (
  <Scene
    key='counter'
    title='Counter'
    component={Counter}
  />
);
