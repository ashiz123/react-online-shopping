import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';


//state is passing as default in mapStateToprops, the second one passing ownProps as this is own state. 
// we can use second arguement to do something with specific particular post.
// Using of currying function. example
const mapStateToProps = (state, ownProps) => 
({
       collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const CollectionComponent = ({collection}) =>{

    const{title, items} = collection;

    return(
    <div className="collection-page">
      <h2 className="title">
          {title}
      </h2>
      <div className="items">
          {
              items.map(item => <CollectionItem key={item.id} item={item} />)
          }
      </div>
    </div>
    )
}

export default connect(mapStateToProps)(CollectionComponent);