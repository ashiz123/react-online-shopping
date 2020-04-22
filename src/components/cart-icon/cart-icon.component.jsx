import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className="shopping-icon"/>
        <span className='item-count'> {itemCount} </span>
    </div>
)


const mapStateToProps = createStructuredSelector
({
    //Memoization is something that if the state is not updated it should pass the data into the compnonent.
    //reduce is use for counting, where the first arguemnet is accumulator and second is the single item. and 0 is the starting of accumulator
    itemCount : selectCartItemsCount
})



//here null is passed because first parameter in connect is mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);