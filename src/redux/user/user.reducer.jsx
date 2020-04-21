import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action ) =>{
    switch(action.type)
    {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                //we cant modify the state, so are creating duplicate of the state and modified it.
                ...state, 
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;