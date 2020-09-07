import _ from 'lodash';
import {
    FETCH_ITEM_REQUEST_PENDING,
    FETCH_ITEM_REQUEST_DONE,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    GET_SEARCH_VALUE
} from '../../types';

const initialState = {
    loading: false,
    author: '',
    categories: [],
    items: [],
    selectedItem: [],
    searching: '',
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEM_REQUEST_PENDING:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_REQUEST_DONE:
            return {
                ...state,
                loading: false
            };
        case GET_SEARCH_VALUE:
            return {
                ...state,
                searching: action.payload
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                author: action.payload.author,
                categories: action.payload.categories,
                items: action.payload.items,
                error: ''
            };
        case FETCH_ITEM_FAILURE:
            return {
                loading: false,
                author: '',
                categories: [],
                items: [],
                error: 'Error'
            };
        default:
            return state;
    }
};
