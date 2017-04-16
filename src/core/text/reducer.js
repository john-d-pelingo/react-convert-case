/* eslint-disable complexity */

import * as actionTypes from './action-types';

const changeCase = require('change-case');

export const initialTextState = {
    copied: '',
    current: '',
    lastCased: ''
};

export function textReducer(state = initialTextState, { payload, type }) {
    let casedText = '';

    switch (type) {
        case actionTypes.COPY_TEXT:
            return Object.assign({}, state, {
                copied: payload.newText
            });

        case actionTypes.SET_CAMEL_CASE:
            casedText = changeCase.camelCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_CONSTANT_CASE:
            casedText = changeCase.constantCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_DOT_CASE:
            casedText = changeCase.dotCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_HEADER_CASE:
            casedText = changeCase.headerCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_LOWER_CASE:
            casedText = changeCase.lowerCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_LOWER_FIRST_CASE:
            casedText = changeCase.lowerCaseFirst(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_NO_CASE:
            casedText = changeCase.noCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_PARAM_CASE:
            casedText = changeCase.paramCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_PASCAL_CASE:
            casedText = changeCase.pascalCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_PATH_CASE:
            casedText = changeCase.pathCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_SENTENCE_CASE:
            casedText = changeCase.sentenceCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_SNAKE_CASE:
            casedText = changeCase.snakeCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_SWAP_CASE:
            casedText = changeCase.swapCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_TITLE_CASE:
            casedText = changeCase.titleCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_UPPER_CASE:
            casedText = changeCase.upperCase(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.SET_UPPER_FIRST_CASE:
            casedText = changeCase.upperCaseFirst(payload.newText);
            return Object.assign({}, state, {
                current: casedText,
                lastCased: casedText
            });

        case actionTypes.UPDATE_CURRENT_TEXT:
            return Object.assign({}, state, {
                current: payload.newText
            });

        default:
            return state;
    }
}
