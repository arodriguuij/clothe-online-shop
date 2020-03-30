import React from "react";
import "./checkout-item.styles.scss";
import {
  removeItem,
  incrementQuantityItem,
  decrementQuantityItem
} from "../../redux/cart/cart.actions.js";
import { connect } from "react-redux";

const CheckoutItem = props => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.item.imageUrl} alt="item" />
    </div>
    <span className="name">{props.item.name}</span>
    <span className="quantity">
      <div
        className="arrow"
        onClick={() => props.onDecrementQuantityItem(props.item)}
      >
        &#10094;
      </div>
      <div className="value">{props.item.quantity}</div>
      <div
        className="arrow"
        onClick={() => props.onIncrementQuantityItem(props.item)}
      >
        &#10095;
      </div>
    </span>
    <span className="price">{props.item.price}</span>
    <div
      onClick={() => props.onRemoveItem(props.item)}
      className="remove-button"
    >
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: item => dispatch(removeItem(item)),
    onIncrementQuantityItem: item => dispatch(incrementQuantityItem(item)),
    onDecrementQuantityItem: item => dispatch(decrementQuantityItem(item))
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
