import axios from 'axios';
import {
    FETCH_ITEM_REQUEST_DONE,
    FETCH_ITEM_REQUEST_PENDING,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    GET_SEARCH_VALUE,
    SET_ITEM_SELECTED,
    FETCH_ITEM_DETAIL_SUCCESS,
    FETCH_ITEM_DETAIL_FAILURE,
    GET_SEARCH_STATUS,
    GET_SEARCH_STATUS_REMOVE,
    REMOVE_SEARCHING
} from '../types';

import { SETTINGS } from '../config/settings';

export const fetchItemRequestPending = () => {
    return {
        type: FETCH_ITEM_REQUEST_PENDING,
        payload: true
    };
};

export const fetchItemRequestDone = () => {
    return {
        type: FETCH_ITEM_REQUEST_DONE,
        payload: false
    };
};

export const statusSearchPending = () => {
    return {
        type: GET_SEARCH_STATUS,
        payload: true
    };
};

export const statusSearchDone = () => {
    return {
        type: GET_SEARCH_STATUS_REMOVE,
        payload: false
    };
};

export const fetchItemSuccess = (data) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        payload: data
    };
};

export const fetchItemFailure = (error) => {
    return {
        type: FETCH_ITEM_FAILURE,
        payload: error
    };
};

export const searchValue = (data) => {
    return {
        type: GET_SEARCH_VALUE,
        payload: data
    };
};

export const getItemSelected = (id) => {
    return {
        type: SET_ITEM_SELECTED,
        payload: id
    };
};

export const fetchItemDetailFailure = (error) => {
    return {
        type: FETCH_ITEM_DETAIL_FAILURE,
        payload: error
    };
};

export const fetchItemDetailSuccess = (data) => {
    return {
        type: FETCH_ITEM_DETAIL_SUCCESS,
        payload: data
    };
};

export const removeSearchValue = () => {
    return {
        type: REMOVE_SEARCHING,
        payload: ''
    };
};

export const fetchDataByName = (queryString) => {
    return (dispatch) => {
        dispatch(fetchItemRequestPending());
        axios
            .get(`${SETTINGS.API_PATH}items?q=${queryString}`)
            .then((response) => {
                dispatch(fetchItemSuccess(response.data));
                dispatch(fetchItemRequestDone());
            })
            .catch((error) => {
                dispatch(fetchItemFailure(error));
                dispatch(fetchItemRequestDone());
            });
    };
};

export const getSearchValue = (data) => {
    return (dispatch) => {
        dispatch(searchValue(data));
    };
};

export const itemDetailSelected = (id) => {
    return (dispatch) => {
        dispatch(getItemSelected(id));
    };
};

export const getStatusSearchPending = () => {
    return (dispatch) => {
        dispatch(statusSearchPending());
    };
};

export const getStatusSearchDone = () => {
    return (dispatch) => {
        dispatch(statusSearchDone());
    };
};

export const updateSearchValue = () => {
    return (dispatch) => {
        dispatch(removeSearchValue());
    };
};

export const fetchDataById = (id) => {
    return (dispatch) => {
        axios
            .get(`${SETTINGS.API_PATH}items/${id}`)
            .then((response) => {
                dispatch(fetchItemDetailSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchItemDetailFailure(error));
            });
    };
};
