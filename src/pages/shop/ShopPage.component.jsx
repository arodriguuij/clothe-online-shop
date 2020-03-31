import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import axios from "axios";
import { importShopData } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://clothe-online-shop.firebaseio.com/collections.json"
    );
    console.log(response.data);
    this.props.onImportShopData(response.data);
    this.setState({ loading: false });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => ({
  onImportShopData: collections => dispatch(importShopData(collections))
});
export default connect(null, mapDipatchToProps)(ShopPage);
