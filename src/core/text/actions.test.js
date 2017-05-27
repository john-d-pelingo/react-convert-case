/* eslint-disable no-loop-func */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { CASES } from 'core/constants';

import {
  clearHistory,
  clearText,
  copyText,
  resetText,
  setCamelCase,
  setConstantCase,
  setDotCase,
  setHeaderCase,
  setLowerCase,
  setLowerFirstCase,
  setNoCase,
  setParamCase,
  setPascalCase,
  setPathCase,
  setSentenceCase,
  setSnakeCase,
  setSwapCase,
  setTitleCase,
  setUpperCase,
  setUpperFirstCase,
  updateCurrentText,
  clearHistoryText,
  resetHistoryText,
  setCase
} from './actions';
import {
  CLEAR_HISTORY,
  CLEAR_TEXT,
  COPY_TEXT,
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
  SET_UPPER_FIRST_CASE,
  UPDATE_CURRENT_TEXT
} from './action-types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

CASES.CAMEL.action = setCamelCase;
CASES.CONSTANT.action = setConstantCase;
CASES.DOT.action = setDotCase;
CASES.HEADER.action = setHeaderCase;
CASES.LOWER.action = setLowerCase;
CASES.LOWER_FIRST.action = setLowerFirstCase;
CASES.NO.action = setNoCase;
CASES.PARAM.action = setParamCase;
CASES.PASCAL.action = setPascalCase;
CASES.PATH.action = setPathCase;
CASES.SENTENCE.action = setSentenceCase;
CASES.SNAKE.action = setSnakeCase;
CASES.SWAP.action = setSwapCase;
CASES.TITLE.action = setTitleCase;
CASES.UPPER.action = setUpperCase;
CASES.UPPER_FIRST.action = setUpperFirstCase;

const casesKeys = Object.keys(CASES);

describe('Text actions', () => {
  let ø;
  let initialState;
  let newText;
  let store;

  beforeEach(() => {
    ø = Object.create(null);

    initialState = {
      case: {
        last: 'NO'
      },
      text: {
        past: [],
        present: {
          copied: 'Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio',
          current: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
          initial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          lastCased: 'uT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS SUSCIPIT LABORIOSAM, NISI UT ALIQUID EX EA COMMODI CONSEQUATUR?'
        },
        future: []
      }
    };

    newText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.';
    store = mockStore(initialState);
  });

  describe('clearHistory', () => {
    it('should create CLEAR_HISTORY', () => {
      const actions = [
        { type: CLEAR_HISTORY }
      ];

      store.dispatch(clearHistory());
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('clearText', () => {
    it('should create CLEAR_TEXT', () => {
      const actions = [
        { type: CLEAR_TEXT }
      ];

      store.dispatch(clearText());
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('copyText', () => {
    it('should create COPY_TEXT', () => {
      const actions = [
        {
          type: COPY_TEXT,
          payload: {
            newText
          }
        }
      ];

      store.dispatch(copyText.call(ø, newText));
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('resetText', () => {
    it('should create RESET_TEXT', () => {
      const actions = [
        { type: RESET_TEXT }
      ];

      store.dispatch(resetText());
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  for (let ii = 0; ii < casesKeys.length; ii++) {
    describe(CASES[casesKeys[ii]].action.name, () => {
      it(`should create ${ CASES[casesKeys[ii]].actionType }`, () => {
        const actions = [
          {
            type: CASES[casesKeys[ii]].actionType,
            payload: {
              newCase: CASES[casesKeys[ii]].name,
              newText
            }
          }
        ];

        store.dispatch(CASES[casesKeys[ii]].action.call(ø, newText));
        const nextActions = store.getActions();
        expect(nextActions).toEqual(actions);
      });
    });
  }

  describe('updateCurrentText', () => {
    it('should create RESET_TEXT', () => {
      const actions = [
        {
          type: UPDATE_CURRENT_TEXT,
          payload: {
            newText
          }
        }
      ];

      store.dispatch(updateCurrentText.call(ø, newText));
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('clearHistoryText', () => {
    it('should create CLEAR_TEXT and CLEAR_HISTORY', () => {
      const actions = [
        { type: CLEAR_TEXT },
        { type: CLEAR_HISTORY }
      ];

      store.dispatch(clearHistoryText());
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('resetHistoryText', () => {
    it('should create RESET_TEXT and CLEAR_HISTORY', () => {
      const actions = [
        { type: RESET_TEXT },
        { type: CLEAR_HISTORY }
      ];

      store.dispatch(resetHistoryText());
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });
  });

  describe('setCase', () => {
    it('should not create any action', () => {
      const newState = {
        ...initialState,
        text: {
          ...initialState.text,
          present: {
            ...initialState.text.present,
            current: 'i am no cased',
            lastCased: 'i am no cased'
          }
        }
      };
      newText = 'i am no cased';
      store = mockStore(newState);
      const actions = [];

      store.dispatch(setCase.call(ø, 'NO', newText));
      const nextActions = store.getActions();
      expect(nextActions).toEqual(actions);
    });

    for (let ii = 0; ii < casesKeys.length; ii++) {
      it(`should create ${ CASES[casesKeys[ii]].actionType }`, () => {
        const actions = [
          {
            type: CASES[casesKeys[ii]].actionType,
            payload: {
              newCase: CASES[casesKeys[ii]].name,
              newText
            }
          }
        ];

        store.dispatch(setCase.call(ø, CASES[casesKeys[ii]].name, newText));
        const nextActions = store.getActions();
        expect(nextActions).toEqual(actions);
      });
    }
  });
});
