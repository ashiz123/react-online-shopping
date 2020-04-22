import React from 'react';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {withRouter} from  'react-router-dom';


//using selector
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom.button.component';

const mapStateToProps = createStructuredSelector
({
 cartItems: selectCartItems
})






//if we didnot supply arguement to connect, connect pass dispatch to connected component
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?(
                cartItems.map((cartItem) =>
                <CartItem key = {cartItem.id} item = {cartItem} />
                )): <span className="empty-message">
                    Your cart is empty.
                </span>
            }
        
        </div>
        <CustomButton type="button" onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden()) // or can do directly using dispatch , but no dispatchToProps should be in connect function.
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

export default withRouter(connect(mapStateToProps )(CartDropdown));