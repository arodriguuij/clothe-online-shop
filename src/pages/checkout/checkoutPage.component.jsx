import React from "react";
import "./checkoutPage.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item-component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const CheckoutPage = props => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Products</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div> 
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {props.cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)}
    <div className="total">
      <span>TOTAL: {props.cartTotal}€</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
