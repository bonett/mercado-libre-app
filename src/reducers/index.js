import { combineReducers } from 'redux';
import { productReducer } from './product';

const rootReducer = combineReducers({
    data: productReducer
});

export default rootReducer;
