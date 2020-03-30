import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = props => (
  <div className="cart-icon" onClick={props.onToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.numCartItems}</span>
  </div>
);

const mapDispatchToProps = dispathc => ({
  onToggleCartHidden: () => dispathc(toggleCartHidden())
});

const mapStateToProps = state => {
  return {
    numCartItems: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
