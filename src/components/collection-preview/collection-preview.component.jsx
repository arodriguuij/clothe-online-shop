import React from "react";
import "./collection-preview.component.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map((item, id) => (
          <CollectionItem key={id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
