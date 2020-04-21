import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //to do more middlewares.
//...middlewares get the all the values and function in upper middleares array.
const store =  createStore(rootReducer, applyMiddleware(...middlewares));

export default store;