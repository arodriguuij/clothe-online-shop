import cartActionTypes from "./cart.type";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cardReducer;
