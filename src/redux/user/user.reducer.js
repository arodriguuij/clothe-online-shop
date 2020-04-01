import { UserActionTypes } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: undefined
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        error: action.payload.error
      };
    case UserActionTypes.FETCH_LOGIN_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error
      };
    case UserActionTypes.FETCH_LOGIN_START_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        currentUser: action.payload.currentUser
      };
    case UserActionTypes.FETCH_LOGIN_START_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;
