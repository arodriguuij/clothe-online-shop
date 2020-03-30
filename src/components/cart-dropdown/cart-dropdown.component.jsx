import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import "./cart-dropdown.styles.scss";

const Cart = props => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {props.cartItems.length ? (
        props.cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButtom
      onClick={() => {
        props.history.push("/checkout");
        props.dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButtom>
  </div>
);

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default withRouter(connect(mapStateToProps)(Cart));
