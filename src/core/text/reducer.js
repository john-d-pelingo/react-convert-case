/* eslint-disable complexity */

import * as actionTypes from './action-types';

const changeCase = require('change-case');

export const initialTextState = {
    copied: '',
    last: '',
    lastCased: ''
};

export function textReducer(state = initialTextState, { payload, type }) {
    switch (type) {
        case actionTypes.COPY_TEXT:
            return Object.assign({}, state, {
                copied: payload.newText
            });

        case actionTypes.SET_CAMEL_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.camelCase(payload.newText)
            });

        case actionTypes.SET_CONSTANT_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.constantCase(payload.newText)
            });

        case actionTypes.SET_DOT_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.dotCase(payload.newText)
            });

        case actionTypes.SET_HEADER_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.headerCase(payload.newText)
            });

        case actionTypes.SET_LOWER_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.lowerCase(payload.newText)
            });

        case actionTypes.SET_LOWER_FIRST_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.lowerCaseFirst(payload.newText)
            });

        case actionTypes.SET_PARAM_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.paramCase(payload.newText)
            });

        case actionTypes.SET_PASCAL_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.pascalCase(payload.newText)
            });

        case actionTypes.SET_PATH_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.pathCase(payload.newText)
            });

        case actionTypes.SET_SENTENCE_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.sentenceCase(payload.newText)
            });

        case actionTypes.SET_SNAKE_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.snakeCase(payload.newText)
            });

        case actionTypes.SET_SWAP_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.swapCase(payload.newText)
            });

        case actionTypes.SET_TITLE_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.titleCase(payload.newText)
            });

        case actionTypes.SET_UPPER_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.upperCase(payload.newText)
            });

        case actionTypes.SET_UPPER_FIRST_CASE:
            return Object.assign({}, state, {
                last: payload.newText,
                lastCased: changeCase.upperCaseFirst(payload.newText)
            });

        default:
            return state;
    }
}
