import { combineReducers } from 'redux';
import { itemReducer } from './item';

const rootReducer = combineReducers({
    data: itemReducer
});

export default rootReducer;
