import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //to do more middlewares.
//...middlewares get the all the values and function in upper middleares array.
const store =  createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )  );

export default store;



// compose(
//     applyMiddleware(thunk, otherMiddleware()),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )