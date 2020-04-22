// this file is use for reuse of selectors. we can use the specific data from database.
// memoize selector


import {createSelector} from 'reselect';


const selectCart = state => state.cart;

// const selectUser = state => state.user;



export const selectCartItems = createSelector(
   //for multiple selector
    // [selectCart, selectUser  ],
    // (cart, user) => 
    
    [selectCart], //this refrences the state above.
    (cart) => cart.cartItems

    );


    export const selectCartItemsCount = createSelector(
    [selectCartItems],// this refrences the selecCartItems created above.
    (cartItems) => cartItems.reduce((accumaltedQuantity, cartItem ) =>
    accumaltedQuantity + cartItem.quantity
    , 0)
        );
    