import axios from 'axios';
import {
    FETCH_ITEM_REQUEST_DONE,
    FETCH_ITEM_REQUEST_PENDING,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    GET_SEARCH_VALUE
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

export const fetchDataByName = (queryString) => {
    return (dispatch) => {
        dispatch(fetchItemRequestPending());
        axios
            .get(`${SETTINGS.API_PATH}items?q=${queryString}`)
            .then((response) => {
                console.log(response);
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

/* export const fetchDataById = (data, init, limit) => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest());

        if (data.length - limit < 4) {
            setTimeout(() => {
                dispatch(
                    fetchLoadMoreArticles(_.slice(data, init, data.length))
                );
                dispatch(loadMoreEnabled(true));
            }, 1000);
        } else {
            setTimeout(() => {
                dispatch(fetchLoadMoreArticles(_.slice(data, init, limit)));
            }, 1000);
        }
    };
};
 */