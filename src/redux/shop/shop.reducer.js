import shopActionTypes from "./shop.types";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: action.payload.isFetching
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload.collections,
        isFetching: action.payload.isFetching
      };
    case shopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default shopReducer;
