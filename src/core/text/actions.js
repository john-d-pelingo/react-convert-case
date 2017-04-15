/* eslint-disable complexity */

import { CASE } from '../constants';
import { caseSelectors } from '../case';

import * as actionTypes from './action-types';
import * as textSelectors from './selectors';

const diff = require('diff');

export function copyText(newText) {
    return {
        type: actionTypes.COPY_TEXT,
        payload: {
            newText
        }
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

export function setCase(newCase, newText) {
    return function (dispatch, getState) {
        // console.log('textSelectors.getLastText(getState())', textSelectors.getPresentLastText(getState()));
        // console.log('newText', newText);
        // console.log('present', getState().text.present);
        // console.log('diff.diffChars(textSelectors.getLastText(getState()), newText)', diff.diffChars(textSelectors.getLastText(getState()), newText));

        const presentLastCasedText = textSelectors.getPresentLastCasedText(getState());
        const diffs = diff.diffChars(presentLastCasedText, newText);

        if (diffs.length > 1
            || (diffs.length === 1 && diffs[0].added === true)
            || caseSelectors.getLastCase(getState()) !== newCase) {
            // diffs.length > 1                                  : both texts are different.
            // diffs.length === 1 && diffs[0].added === true     : initial text is ''.
            // caseSelectors.getLastCase(getState()) !== newCase : new case selected is different than last case selected.

            switch (newCase) {
                case CASE.CAMEL:
                    return dispatch(setCamelCase(newCase, newText));

                case CASE.CONSTANT:
                    return dispatch(setConstantCase(newCase, newText));

                case CASE.DOT:
                    return dispatch(setDotCase(newCase, newText));

                case CASE.HEADER:
                    return dispatch(setHeaderCase(newCase, newText));

                case CASE.LOWER:
                    return dispatch(setLowerCase(newCase, newText));

                case CASE.LOWER_FIRST:
                    return dispatch(setLowerFirstCase(newCase, newText));

                case CASE.PARAM:
                    return dispatch(setParamCase(newCase, newText));

                case CASE.PASCAL:
                    return dispatch(setPascalCase(newCase, newText));

                case CASE.PATH:
                    return dispatch(setPathCase(newCase, newText));

                case CASE.SENTENCE:
                    return dispatch(setSentenceCase(newCase, newText));

                case CASE.SNAKE:
                    return dispatch(setSnakeCase(newCase, newText));

                case CASE.SWAP:
                    return dispatch(setSwapCase(newCase, newText));

                case CASE.TITLE:
                    return dispatch(setTitleCase(newCase, newText));

                case CASE.UPPER:
                    return dispatch(setUpperCase(newCase, newText));

                case CASE.UPPER_FIRST:
                    return dispatch(setUpperFirstCase(newCase, newText));

                default:
            }
        }
        return 1;
    };
}
