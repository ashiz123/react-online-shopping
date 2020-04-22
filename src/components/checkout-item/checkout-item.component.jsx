import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';


const mapDispatchToProps =(dispatch) => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item=> dispatch(addItem(item)),
    removeItem : item=> dispatch(removeItem(item))
}) 

//we cant do this way
// const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}, clearItem}) =>
// because by destructuring , we cant use its top level item, i.e cartItem.
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const{name, imageUrl, quantity, price} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">  {/* container for image */}
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick= {() =>(removeItem(cartItem))}>&#10094;</div>
                 <span className="value">{quantity}</span>
                <div className="arrow" onClick= {() =>(addItem(cartItem))}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick= {() =>(clearItem(cartItem))}>&#10005;</span>
        </div>
    )

    
}





export default connect(null, mapDispatchToProps)(CheckoutItem);