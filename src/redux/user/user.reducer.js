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
    case "LOG_OUT":
      return {
        ...state,
        token: null,
        userId: null
      };
    case "AUTH_SUCCESS":
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
