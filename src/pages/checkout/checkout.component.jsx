import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal}  from  '../../redux/cart/cart.selectors';


import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})


const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
       <div className="checkout-header">
           <div className="header-block">
               <span>Product</span>
           </div>
           <div className="header-block">
               <span>Description</span>
           </div>
           <div className="header-block">
               <span>Quantity</span>
           </div>
           <div className="header-block">
               <span>Price</span>
               
           </div>
           <div className="header-block">
               <span>Remove</span>
           </div>
       </div>
       {cartItems.map((cartItem) => (
           <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
       ))}

     {
         (total !== 0) ?  <div className="total">TOTAL: ${total} </div> : ""
         
     }
          
     <div className="test-warning">
         *please use following test credit card for payment*
         4242 4242 4242 4242  with  exp: 01/20 - cvv: 123
     </div>
      <StripeCheckoutButton price={total}/>
    </div>
)


export default connect(mapStateToProps)(CheckoutPage);

