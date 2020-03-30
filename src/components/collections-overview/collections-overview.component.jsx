import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = props => (
  <div className="collections-overview">
    {props.collections.map(collection => (
      <CollectionPreview key={collection.id} collection={collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
