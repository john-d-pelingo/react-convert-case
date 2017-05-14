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

export function setCamelCase(newText) {
    return {
        type: actionTypes.SET_CAMEL_CASE,
        payload: {
            newCase: CASES.CAMEL.name,
            newText
        }
    };
}

export function setConstantCase(newText) {
    return {
        type: actionTypes.SET_CONSTANT_CASE,
        payload: {
            newCase: CASES.CONSTANT.name,
            newText
        }
    };
}

export function setDotCase(newText) {
    return {
        type: actionTypes.SET_DOT_CASE,
        payload: {
            newCase: CASES.DOT.name,
            newText
        }
    };
}

export function setHeaderCase(newText) {
    return {
        type: actionTypes.SET_HEADER_CASE,
        payload: {
            newCase: CASES.HEADER.name,
            newText
        }
    };
}

export function setLowerCase(newText) {
    return {
        type: actionTypes.SET_LOWER_CASE,
        payload: {
            newCase: CASES.LOWER.name,
            newText
        }
    };
}

export function setLowerFirstCase(newText) {
    return {
        type: actionTypes.SET_LOWER_FIRST_CASE,
        payload: {
            newCase: CASES.LOWER_FIRST.name,
            newText
        }
    };
}

export function setNoCase(newText) {
    return {
        type: actionTypes.SET_NO_CASE,
        payload: {
            newCase: CASES.NO.name,
            newText
        }
    };
}

export function setParamCase(newText) {
    return {
        type: actionTypes.SET_PARAM_CASE,
        payload: {
            newCase: CASES.PARAM.name,
            newText
        }
    };
}

export function setPascalCase(newText) {
    return {
        type: actionTypes.SET_PASCAL_CASE,
        payload: {
            newCase: CASES.PASCAL.name,
            newText
        }
    };
}
export function setPathCase(newText) {
    return {
        type: actionTypes.SET_PATH_CASE,
        payload: {
            newCase: CASES.PATH.name,
            newText
        }
    };
}

export function setSentenceCase(newText) {
    return {
        type: actionTypes.SET_SENTENCE_CASE,
        payload: {
            newCase: CASES.SENTENCE.name,
            newText
        }
    };
}

export function setSnakeCase(newText) {
    return {
        type: actionTypes.SET_SNAKE_CASE,
        payload: {
            newCase: CASES.SNAKE.name,
            newText
        }
    };
}

export function setSwapCase(newText) {
    return {
        type: actionTypes.SET_SWAP_CASE,
        payload: {
            newCase: CASES.SWAP.name,
            newText
        }
    };
}

export function setTitleCase(newText) {
    return {
        type: actionTypes.SET_TITLE_CASE,
        payload: {
            newCase: CASES.TITLE.name,
            newText
        }
    };
}

export function setUpperCase(newText) {
    return {
        type: actionTypes.SET_UPPER_CASE,
        payload: {
            newCase: CASES.UPPER.name,
            newText
        }
    };
}

export function setUpperFirstCase(newText) {
    return {
        type: actionTypes.SET_UPPER_FIRST_CASE,
        payload: {
            newCase: CASES.UPPER_FIRST.name,
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
                    return dispatch(setCamelCase(newText));

                case CASES.CONSTANT.name:
                    return dispatch(setConstantCase(newText));

                case CASES.DOT.name:
                    return dispatch(setDotCase(newText));

                case CASES.HEADER.name:
                    return dispatch(setHeaderCase(newText));

                case CASES.LOWER.name:
                    return dispatch(setLowerCase(newText));

                case CASES.LOWER_FIRST.name:
                    return dispatch(setLowerFirstCase(newText));

                case CASES.NO.name:
                    return dispatch(setNoCase(newText));

                case CASES.PARAM.name:
                    return dispatch(setParamCase(newText));

                case CASES.PASCAL.name:
                    return dispatch(setPascalCase(newText));

                case CASES.PATH.name:
                    return dispatch(setPathCase(newText));

                case CASES.SENTENCE.name:
                    return dispatch(setSentenceCase(newText));

                case CASES.SNAKE.name:
                    return dispatch(setSnakeCase(newText));

                case CASES.SWAP.name:
                    return dispatch(setSwapCase(newText));

                case CASES.TITLE.name:
                    return dispatch(setTitleCase(newText));

                case CASES.UPPER.name:
                    return dispatch(setUpperCase(newText));

                case CASES.UPPER_FIRST.name:
                    return dispatch(setUpperFirstCase(newText));

                default:
            }
        }
        return {};
    };
}
