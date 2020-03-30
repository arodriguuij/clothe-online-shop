import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.onToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispathc => ({
    onToggleCartHidden: () => dispathc(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
