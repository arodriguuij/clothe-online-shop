import cartActionTypes from "./cart.type";

const initialState = {
  hidden: true
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cardReducer;