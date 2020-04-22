import {CartActionTypes} from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            } 

            case CartActionTypes.ADD_ITEM:
             return{
                 ...state, 
                 cartItems: addItemToCart(state.cartItems, action.payload)
             }

             case CartActionTypes.CLEAR_ITEM_FROM_CART:
             return{
                 ...state,
                 //if id doesn't match than i want to keep it otherwise filter it.
                 cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
             }


             case CartActionTypes.REOMOVE_ITEM:
                 return {
                     ...state,
                     cartItems: removeItemFromCart(state.cartItems, action.payload),
                     
                 }

            default:
                return state;
    }
}


export default cartReducer;