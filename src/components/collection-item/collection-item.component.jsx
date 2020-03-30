import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

const CollectionItem = props => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">{props.item.price}</span>
      </div>
      <CustomButton inverted onClick={() => props.onAddItem(props.item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(addItemToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
