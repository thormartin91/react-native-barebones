/** @flow */

'use strict'

import React from 'react';
import { Scene } from 'react-native-router-flux';
import Welcome from '../screens/Welcome';

export const welcome = (
  <Scene
    key='welcome'
    title='Home'
    component={Welcome}
  />
);
