/** @flow */

'use strict'

export type Action = {
  type: string;
};

export const COUNTER = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export type Dispatch = (action: Action | Array<Action>) => any;
