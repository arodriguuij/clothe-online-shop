import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item-styles';

const CollectionItem = props => {
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        imageUrl={props.item.imageUrl}
      ></BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer>{props.item.name}</NameContainer>
        <PriceContainer>{props.item.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => props.onAddItem(props.item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(addItemToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
