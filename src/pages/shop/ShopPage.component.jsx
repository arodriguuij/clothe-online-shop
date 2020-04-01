import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collectionPage.container";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

const ShopPage = props => {
  const { onFetchCollectionStartAsync } = props;
  useEffect(() => {
    onFetchCollectionStartAsync();
  }, [onFetchCollectionStartAsync]);
  
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};
const mapDipatchToProps = dispatch => ({
  onFetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDipatchToProps)(ShopPage);
