export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItem = (cartItems, cartItemToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

export const incrementQuantityItem = (cartItems, cartItemToIncrement) => {
  return cartItems.map(item => {
    if (item.id === cartItemToIncrement.id)
      return { ...item, quantity: item.quantity + 1 };
    else return item;
  });
};

export const decrementQuantityItem = (cartItems, cartItemToDecrement) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToDecrement.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToDecrement.id);
  } else {
    return cartItems.map(item =>
      item.id === cartItemToDecrement.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
