/** @flow */

'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { counter } from './counter';
import { welcome } from './welcome';

const ReduxRouter = connect()(Router);

const Routes = () => (
  <ReduxRouter>
      {welcome}
      {counter}
  </ReduxRouter>
);

export default Routes;
