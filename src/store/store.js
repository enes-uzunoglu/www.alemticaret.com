import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
//TODO:legacy_createStore as createStore
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const logger = createLogger();

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer, 
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
//TODO: thunk, logger

export default store;
