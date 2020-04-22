import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom.button.component';

const mapDispatchToProps =  dispatch => ({
    addItem: item => dispatch(addItem(item))
})


const CollectionItem = ({item, addItem}) => {

  const {name, price, imageUrl} = item;
    return(
        <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
         
         
         <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
         </div>
            {/* because add item comes with 1 arguemnent that is item */}
         <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
         
        
        </div>
    )
 
}

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);