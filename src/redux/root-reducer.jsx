//this reducer combine all the reducer.
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';

export default combineReducers({
    //key : //reducer_name
    user: userReducer,
    cart : cartReducer
});