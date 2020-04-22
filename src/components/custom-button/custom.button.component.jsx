import React from 'react';

import './custom-button.styles.scss';
//children means between the tags.
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) =>
(
    
    // conditional rendering using string interpolation
    <button className= { `${inverted ? 'inverted':' '} ${isGoogleSignIn ? 'google-sign-in':' '} custom-button`} {...otherProps}>
        {children}
    </button>
);


export default CustomButton;