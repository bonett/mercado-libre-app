import _ from 'lodash';
import {
    FETCH_ITEM_REQUEST,
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
        case FETCH_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SEARCH_VALUE:
            return {
                ...state,
                searching: action.payload,
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                author: action.payload,
                categories: action.payload,
                items: action.payload,
                error: '',
            };
        case FETCH_ITEM_FAILURE:
            return {
                loading: false,
                author: '',
                categories: [],
                items: [],
                error: 'Error',
            };
        default:
            return state;
    }
};
