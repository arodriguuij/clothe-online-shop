import { UserActionTypes } from "./user.types";
import axios from "axios";

export const fetchLoginStartAsyn = (authData, url) => {
  return async dispatch => {
    dispatch(fetchLoginStart());
    try {
      let response;
      response = await axios.post(url, authData);
      
      const user = {
        email: response.data.email
      };
      dispatch(fetchLoginStartSuccess(user));
    } catch (error) {
      console.error("What a mistake has appear here :o", error);
      dispatch(fetchLoginStartFailure(error.message));
    }
  };
};

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
  payload: {
    currentUser: null,
    error: undefined
  }
});

export const fetchLoginStart = () => ({
  type: UserActionTypes.FETCH_LOGIN_START,
  payload: {
    isLoading: true,
    error: undefined
  }
});

export const fetchLoginStartSuccess = user => ({
  type: UserActionTypes.FETCH_LOGIN_START_SUCCESS,
  payload: {
    isLoading: false,
    currentUser: user
  }
});

export const fetchLoginStartFailure = error => ({
  type: UserActionTypes.FETCH_LOGIN_START_FAILURE,
  payload: {
    isLoading: false,
    error: error
  }
});
