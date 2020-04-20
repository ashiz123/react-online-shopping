import React from 'react';

import './custom-button.styles.scss';
//children means between the tags.
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>
(
    
    // conditional rendering using string interpolation
    <button className= {`${isGoogleSignIn ? 'google-sign-in':' '} custom-button`} {...otherProps}>
        {children}
    </button>
)


export default CustomButton;