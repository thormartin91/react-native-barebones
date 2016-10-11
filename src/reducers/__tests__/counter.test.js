import reducer from '../counter'
import { COUNTER } from '../../actions/types';

describe('Counter-reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        count: 0
      }
    )
  });

  it('should handle INCREMENT', () => {
    expect(
      reducer({count:0}, {
        type: COUNTER.INCREMENT
      })
    ).toEqual(
        {
          count: 1
        }
    )
  });

  it('should handle DECREMENT', () => {
    expect(
      reducer({count:1}, {
        type: COUNTER.DECREMENT
      })
    ).toEqual(
        {
          count: 0
        }
    )
  });

});
