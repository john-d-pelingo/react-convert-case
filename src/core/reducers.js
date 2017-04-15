import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { reducer as reduxFormReducer } from 'redux-form';

import { caseReducer } from './case';
import { textReducer } from './text';

export default combineReducers({
    case: caseReducer,
    form: reduxFormReducer,
    text: undoable(textReducer, {
        limit: false
    })
    // text: textReducer
});
