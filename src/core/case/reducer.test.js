/* eslint-disable no-loop-func */

import { CASES } from 'core/constants';

import { caseReducer, caseState } from './reducer';
import {
  RESET_TEXT,
  SET_CAMEL_CASE,
  SET_CONSTANT_CASE,
  SET_DOT_CASE,
  SET_HEADER_CASE,
  SET_LOWER_CASE,
  SET_LOWER_FIRST_CASE,
  SET_NO_CASE,
  SET_PARAM_CASE,
  SET_PASCAL_CASE,
  SET_PATH_CASE,
  SET_SENTENCE_CASE,
  SET_SNAKE_CASE,
  SET_SWAP_CASE,
  SET_TITLE_CASE,
  SET_UPPER_CASE,
  SET_UPPER_FIRST_CASE
} from './action-types';

CASES.CAMEL.actionType = SET_CAMEL_CASE;
CASES.CONSTANT.actionType = SET_CONSTANT_CASE;
CASES.DOT.actionType = SET_DOT_CASE;
CASES.HEADER.actionType = SET_HEADER_CASE;
CASES.LOWER.actionType = SET_LOWER_CASE;
CASES.LOWER_FIRST.actionType = SET_LOWER_FIRST_CASE;
CASES.NO.actionType = SET_NO_CASE;
CASES.PARAM.actionType = SET_PARAM_CASE;
CASES.PASCAL.actionType = SET_PASCAL_CASE;
CASES.PATH.actionType = SET_PATH_CASE;
CASES.SENTENCE.actionType = SET_SENTENCE_CASE;
CASES.SNAKE.actionType = SET_SNAKE_CASE;
CASES.SWAP.actionType = SET_SWAP_CASE;
CASES.TITLE.actionType = SET_TITLE_CASE;
CASES.UPPER.actionType = SET_UPPER_CASE;
CASES.UPPER_FIRST.actionType = SET_UPPER_FIRST_CASE;

const casesKeys = Object.keys(CASES);

describe('Case reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = caseState;
  });

  describe('RESET_TEXT', () => {
    it('should reset the last case', () => {
      const state = {
        ...initialState,
        last: 'PATH'
      };

      const nextState = caseReducer(state, {
        type: RESET_TEXT,
        payload: {}
      });

      expect(nextState).toEqual(initialState);
    });
  });

  for (let ii = 0; ii < casesKeys.length; ii++) {
    describe(CASES[casesKeys[ii]].actionType, () => {
      it(`should set the last case to ${ CASES[casesKeys[ii]].name }`, () => {
        const nextState = caseReducer(initialState, {
          type: CASES[casesKeys[ii]].actionType,
          payload: {
            newCase: CASES[casesKeys[ii]].name,
            newText: null
          }
        });

        expect(nextState.last).toBe(CASES[casesKeys[ii]].name);
      });
    });
  }
});
