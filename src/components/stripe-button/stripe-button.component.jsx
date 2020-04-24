import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_g8wVmXENbUS8QrviaFpWRpw600RFXdQZ8b';
    

    const onToken = token =>
    {
        console.log(token);
        alert('payment successful');
    }


    return(
        <StripeCheckout
            label = 'Pay Now'
            name = "React Online Shopping"
            billingAddress 
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken} //this trigger when submit
            stripeKey = {publishableKey}

        />
    )
} 

export default StripeCheckoutButton;