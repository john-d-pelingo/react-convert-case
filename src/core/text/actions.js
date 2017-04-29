/* eslint-disable complexity */

import { CASES } from '../constants';
import { caseSelectors } from '../case';

import * as actionTypes from './action-types';
import * as textSelectors from './selectors';

const diff = require('diff');

export function clearHistory() {
    return {
        type: actionTypes.CLEAR_HISTORY
    };
}

export function clearText() {
    return {
        type: actionTypes.CLEAR_TEXT
    };
}

export function copyText(newText) {
    return {
        type: actionTypes.COPY_TEXT,
        payload: {
            newText
        }
    };
}

export function resetText() {
    return {
        type: actionTypes.RESET_TEXT
    };
}

export function setCamelCase(newCase, newText) {
    return {
        type: actionTypes.SET_CAMEL_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setConstantCase(newCase, newText) {
    return {
        type: actionTypes.SET_CONSTANT_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setDotCase(newCase, newText) {
    return {
        type: actionTypes.SET_DOT_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setHeaderCase(newCase, newText) {
    return {
        type: actionTypes.SET_HEADER_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setLowerCase(newCase, newText) {
    return {
        type: actionTypes.SET_LOWER_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setLowerFirstCase(newCase, newText) {
    return {
        type: actionTypes.SET_LOWER_FIRST_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setNoCase(newCase, newText) {
    return {
        type: actionTypes.SET_NO_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setParamCase(newCase, newText) {
    return {
        type: actionTypes.SET_PARAM_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setPascalCase(newCase, newText) {
    return {
        type: actionTypes.SET_PASCAL_CASE,
        payload: {
            newCase,
            newText
        }
    };
}
export function setPathCase(newCase, newText) {
    return {
        type: actionTypes.SET_PATH_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setSentenceCase(newCase, newText) {
    return {
        type: actionTypes.SET_SENTENCE_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setSnakeCase(newCase, newText) {
    return {
        type: actionTypes.SET_SNAKE_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setSwapCase(newCase, newText) {
    return {
        type: actionTypes.SET_SWAP_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setTitleCase(newCase, newText) {
    return {
        type: actionTypes.SET_TITLE_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setUpperCase(newCase, newText) {
    return {
        type: actionTypes.SET_UPPER_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function setUpperFirstCase(newCase, newText) {
    return {
        type: actionTypes.SET_UPPER_FIRST_CASE,
        payload: {
            newCase,
            newText
        }
    };
}

export function updateCurrentText(newText) {
    return {
        type: actionTypes.UPDATE_CURRENT_TEXT,
        payload: {
            newText
        }
    };
}

export function clearHistoryText() {
    return function (dispatch) {
        dispatch(clearText());
        return dispatch(clearHistory());
    };
}

export function resetHistoryText() {
    return function (dispatch) {
        dispatch(resetText());
        return dispatch(clearHistory());
    };
}

export function setCase(newCase, newText) {
    return function (dispatch, getState) {
        const presentLastCasedText = textSelectors.getPresentLastCasedText(getState());
        const diffs = diff.diffChars(presentLastCasedText, newText);

        if (diffs.length > 1
            || (diffs.length === 1 && diffs[0].added === true)
            || caseSelectors.getLastCase(getState()) !== newCase) {
            // diffs.length > 1                                  : both texts are different.
            // diffs.length === 1 && diffs[0].added === true     : initial text is ''.
            // caseSelectors.getLastCase(getState()) !== newCase : new case selected is different than last case selected.

            switch (newCase) {
                case CASES.CAMEL.name:
                    return dispatch(setCamelCase(newCase, newText));

                case CASES.CONSTANT.name:
                    return dispatch(setConstantCase(newCase, newText));

                case CASES.DOT.name:
                    return dispatch(setDotCase(newCase, newText));

                case CASES.HEADER.name:
                    return dispatch(setHeaderCase(newCase, newText));

                case CASES.LOWER.name:
                    return dispatch(setLowerCase(newCase, newText));

                case CASES.LOWER_FIRST.name:
                    return dispatch(setLowerFirstCase(newCase, newText));

                case CASES.NO.name:
                    return dispatch(setNoCase(newCase, newText));

                case CASES.PARAM.name:
                    return dispatch(setParamCase(newCase, newText));

                case CASES.PASCAL.name:
                    return dispatch(setPascalCase(newCase, newText));

                case CASES.PATH.name:
                    return dispatch(setPathCase(newCase, newText));

                case CASES.SENTENCE.name:
                    return dispatch(setSentenceCase(newCase, newText));

                case CASES.SNAKE.name:
                    return dispatch(setSnakeCase(newCase, newText));

                case CASES.SWAP.name:
                    return dispatch(setSwapCase(newCase, newText));

                case CASES.TITLE.name:
                    return dispatch(setTitleCase(newCase, newText));

                case CASES.UPPER.name:
                    return dispatch(setUpperCase(newCase, newText));

                case CASES.UPPER_FIRST.name:
                    return dispatch(setUpperFirstCase(newCase, newText));

                default:
            }
        }
        return 1;
    };
}
