import { UserActionTypes } from "./user.types";

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.LOG_IN:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
