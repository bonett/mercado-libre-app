import axios from 'axios';
import _ from 'lodash';
import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    GET_SEARCH_VALUE
} from '../types';

import { SETTINGS } from '../config/settings';

export const fetchItemRequest = () => {
    return {
        type: FETCH_ITEM_REQUEST,
    };
};

export const fetchArticlesSuccess = (items) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        payload: items,
    };
};

export const fetchArticlesFailure = (error) => {
    return {
        type: FETCH_ITEM_FAILURE,
        payload: error,
    };
};

export const searchValue = (data) => {
    return {
        type: GET_SEARCH_VALUE,
        payload: data,
    };
};

export const fetchDataByName = (queryString) => {
    return (dispatch) => {
        axios
            .get(`${SETTINGS.API_PATH}items?q=${queryString}`)
            .then((response) => {
                console.log(response);
                /* if(response) {
                    const result   = response && response.data,
                        dataList = result && result.articles,
                        articles = dataList && dataList.results;
                        
                    dispatch(loadMoreEnabled(false));
                    dispatch(fetchArticlesSuccess(articles));
                } */
            })
            .catch((error) => {
                console.log(error);
                /* const errorMessage = error.message;
                dispatch(FETCH_ARTICLES_FAILURE(errorMessage)); */
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