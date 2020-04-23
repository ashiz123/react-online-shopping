//this reducer combine all the reducer.
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';  //using localstorage as dafault storage.

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


//creaating normal object
const persistConfig = {
    key : 'root',
    storage,
    whitelist : [
        'cart'
        // 'userReducer' it is stored in database so we dont need store in local storage
    ]

} 


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);