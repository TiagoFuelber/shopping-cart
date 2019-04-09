import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { productsReducer as products } from './products/index';
import { categoriesReducer as categories } from './categories/index';
import { cartReducer as cart } from './cart/index';
import { timerReducer as timer } from './timer/index';
import * as container from '../container';

const reducers = combineReducers({
  products,
  categories,
  cart,
  timer
});

export default createStore(reducers, applyMiddleware(thunkMiddleware.withExtraArgument(container)));
