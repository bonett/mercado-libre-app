import _ from 'lodash';
import {
    FETCH_ITEM_REQUEST_DONE,
    FETCH_ITEM_REQUEST_PENDING,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    GET_SEARCH_VALUE,
    SET_ITEM_SELECTED,
    FETCH_ITEM_DETAIL_SUCCESS,
    FETCH_ITEM_DETAIL_FAILURE
} from '../../types';

const initialState = {
    loading: false,
    author: null,
    categories: [],
    items: [],
    itemSelected: null,
    itemDetail: null,
    searching: ''
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
    case SET_ITEM_SELECTED:
        return {
            ...state,
            itemSelected: action.payload
        };
    case FETCH_ITEM_SUCCESS:
        return {
            ...state,
            author: action.payload.author,
            categories: action.payload.categories,
            items: _.take(action.payload.items, 4),
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
    case FETCH_ITEM_DETAIL_SUCCESS:
        return {
            ...state,
            itemDetail: action.payload.item,
            error: ''
        };
    case FETCH_ITEM_DETAIL_FAILURE:
        return {
            loading: false,
            itemSelected: '',
            itemDetail: '',
            error: 'Error'
        };
    default:
        return state;
    }
};
