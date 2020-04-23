import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer';

const middlewares = [logger]; //to do more middlewares.
//...middlewares get the all the values and function in upper middleares array.
export const store =  createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )  );


  export const persistor = persistStore(store); //created persitsted version of store.

  export default {store, persistor};



// compose(
//     applyMiddleware(thunk, otherMiddleware()),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )