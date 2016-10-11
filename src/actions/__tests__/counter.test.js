'use strict'

import { COUNTER } from '../types';
import { increment, decrement } from '../counter'


describe('Counter-actions', () => {

  describe('increment', () => {
    it('should create an action to increment a counter', () => {
      const expectedAction = {
        type: COUNTER.INCREMENT
      }
      expect(increment()).toEqual(expectedAction)
    });
  });

  describe('decrement', () => {
    it('should create an action to decrement a counter', () => {
      const expectedAction = {
        type: COUNTER.DECREMENT
      }
      expect(decrement()).toEqual(expectedAction)
    });
  });

});
