import cartActionTypes from "./cart.type";
import { addItemToCart, removeItem, incrementQuantityItem, decrementQuantityItem } from "./cart.utils";

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
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    case cartActionTypes.INCREMENT_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: incrementQuantityItem(state.cartItems, action.payload)
      };
    case cartActionTypes.DECREMENT_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: decrementQuantityItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cardReducer;
