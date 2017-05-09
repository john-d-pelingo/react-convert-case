// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
//
// import { CASES } from '../../core/constants';
//
// import {
//     setCamelCase,
//     setCase
// } from './actions';
// import {
//     CLEAR_TEXT,
//     COPY_TEXT,
//     RESET_TEXT,
//     SET_CAMEL_CASE,
//     SET_CONSTANT_CASE,
//     SET_DOT_CASE,
//     SET_HEADER_CASE,
//     SET_LOWER_CASE,
//     SET_LOWER_FIRST_CASE,
//     SET_NO_CASE,
//     SET_PARAM_CASE,
//     SET_PASCAL_CASE,
//     SET_PATH_CASE,
//     SET_SENTENCE_CASE,
//     SET_SNAKE_CASE,
//     SET_SWAP_CASE,
//     SET_TITLE_CASE,
//     SET_UPPER_CASE,
//     SET_UPPER_FIRST_CASE,
//     UPDATE_CURRENT_TEXT
// } from './action-types';
//
// const middlewares = [
//     thunk
// ];
// const mockStore = configureStore(middlewares);
//
// describe('Text actions', () => {
//     let initialState;
//     let newText;
//
//     beforeEach(() => {
//         initialState = {
//             case: {
//                 last: null
//             },
//             text: {
//                 copied: 'Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio',
//                 current: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
//                 initial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//                 lastCased: 'uT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS SUSCIPIT LABORIOSAM, NISI UT ALIQUID EX EA COMMODI CONSEQUATUR?'
//             }
//         };
//
//         newText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.';
//     });
//
//     describe('SET_CAMEL_CASE', () => {
//         it('should create SET_CAMEL_CASE', () => {
//             const store = mockStore(initialState);
//             // store.dispatch(setCamelCase.bind(null, CASES.CAMEL.name, newText));
//             store.dispatch(setCamelCase);
//             // console.log(store);
//             // console.log(store.getState());
//             // console.log(store.getActions());
//         });
//     });
// });
