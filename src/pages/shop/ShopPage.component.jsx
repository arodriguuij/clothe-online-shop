import React from 'react';
import { Component } from 'react';
import SHOP_DATA from './ShopPage.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component{
    state = {
        collections: SHOP_DATA
    }
    render(){
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview 
                        key={id}
                        {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;