/** @flow */

'use strict';

import type { Action } from '../actions/types';
import { COUNTER } from '../actions/types';

const initialState = {
  count: 0
};

type State = {
  count: number
};

export default function counter(state: State = initialState, action: Action) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case COUNTER.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
