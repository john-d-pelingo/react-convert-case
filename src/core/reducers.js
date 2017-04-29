import { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';
import { reducer as reduxFormReducer } from 'redux-form';

import { caseReducer } from './case';
import { textReducer, CLEAR_HISTORY, UPDATE_CURRENT_TEXT } from './text';

export default combineReducers({
    case: caseReducer,
    form: reduxFormReducer,
    text: undoable(textReducer, {
        filter: excludeAction(UPDATE_CURRENT_TEXT),
        clearHistoryType: CLEAR_HISTORY,
        limit: false
    })
    // text: textReducer
});
