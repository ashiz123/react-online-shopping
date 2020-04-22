export const addItemToCart = (cartItems, cartItemToAdd) => 
{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem)
    {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            //if there is item than....
            ?{...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

   

    //if not existing item than add as new item with quantity 1.
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}