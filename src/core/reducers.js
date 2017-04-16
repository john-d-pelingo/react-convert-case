import { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';
import { reducer as reduxFormReducer } from 'redux-form';

import { caseReducer } from './case';
import { textReducer, UPDATE_CURRENT_TEXT } from './text';

export default combineReducers({
    case: caseReducer,
    form: reduxFormReducer,
    text: undoable(textReducer, {
        filter: excludeAction(UPDATE_CURRENT_TEXT),
        limit: false
    })
    // text: textReducer
});
