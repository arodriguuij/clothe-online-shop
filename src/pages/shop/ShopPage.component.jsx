import React, { lazy, useEffect, Suspense } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collectionPage.container")
);

const ShopPage = props => {
  const { onFetchCollectionStartAsync } = props;
  useEffect(() => {
    onFetchCollectionStartAsync();
  }, [onFetchCollectionStartAsync]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${props.match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${props.match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};
const mapDipatchToProps = dispatch => ({
  onFetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDipatchToProps)(ShopPage);
