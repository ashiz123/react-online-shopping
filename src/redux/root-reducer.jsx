//this reducer combine all the reducer.
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    //key : //reducer_name
    user: userReducer
});