import { combineReducers } from 'redux';

import { boardReducer } from './board';
import { scoresReducer } from './scores';
import { ticTacToeReducer } from './tic-tac-toe';

export default combineReducers({
    board: boardReducer,
    scores: scoresReducer,
    ticTacToe: ticTacToeReducer
});
