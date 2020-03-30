import cartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const incrementQuantityItem = item => ({
  type: cartActionTypes.INCREMENT_QUANTITY_ITEM,
  payload: item
});

export const decrementQuantityItem = item => ({
  type: cartActionTypes.DECREMENT_QUANTITY_ITEM,
  payload: item
});
