// import {createStore} from 'redux';
// import reducers from './reducers/index';
import { productReducer } from './reducers/productReducer';
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const store = configureStore(productReducer)

export default store;