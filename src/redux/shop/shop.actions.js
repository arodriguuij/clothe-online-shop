import shopActionTypes from "./shop.types";
import axios from "axios";

export const fetchCollectionStartAsync = () => {
  return async dispatch => {
    dispatch(fetchCollectionStart());
    try {
      const response = await axios.get(
        "https://clothe-online-shop.firebaseio.com/collections.json"
      );
      dispatch(fetchCollectionSuccess(response.data));
    } catch (error) {
      dispatch(fetchCollectionFailure(error));
    }
  };
};

export const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START,
    payload: {
      isFetching: true
    }
  };
};

export const fetchCollectionSuccess = collections => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: {
    collections: collections,
    isFetching: false
  }
});

export const fetchCollectionFailure = error => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: {
    isFetching: false,
    errorMessage: error
  }
});
