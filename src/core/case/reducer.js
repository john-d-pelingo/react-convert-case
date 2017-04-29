/* eslint-disable complexity */

import * as actionTypes from './action-types';

export const initialCaseState = {
    last: null
};

export function caseReducer(state = initialCaseState, { payload, type }) {
    switch (type) {
        case actionTypes.SET_CAMEL_CASE:
        case actionTypes.SET_CONSTANT_CASE:
        case actionTypes.SET_DOT_CASE:
        case actionTypes.SET_HEADER_CASE:
        case actionTypes.SET_LOWER_CASE:
        case actionTypes.SET_LOWER_FIRST_CASE:
        case actionTypes.SET_NO_CASE:
        case actionTypes.SET_PARAM_CASE:
        case actionTypes.SET_PASCAL_CASE:
        case actionTypes.SET_PATH_CASE:
        case actionTypes.SET_SENTENCE_CASE:
        case actionTypes.SET_SNAKE_CASE:
        case actionTypes.SET_SWAP_CASE:
        case actionTypes.SET_TITLE_CASE:
        case actionTypes.SET_UPPER_CASE:
        case actionTypes.SET_UPPER_FIRST_CASE:
            return Object.assign({}, state, {
                last: payload.newCase
            });

        default:
            return state;
    }
}
