import { UserActionTypes } from "./user.types";

const initialState = {
  token: null,
  userId: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    /*     case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      }; */
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        token: null,
        userId: null
      };
    case UserActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId
      };
    default:
      return state;
  }
};

export default userReducer;
