import container from '../../container';
import { CART } from '../actionTypes';
import store from '../store';
import * as timerActions from '../timer/actionCreators';

export const addItemToCart = dispatch =>
  (item, cart) =>
    () => {
      container.addItemToCart(item, cart);
      dispatch({
        type: CART.ADD_TO_CART
      });
    };

export const clearCart = dispatch =>
  () => {
    container.clearCart(store.getState().cart);
    dispatch({
      type: CART.CLEAR_CART
    });
    timerActions.endTimer(dispatch)();
  };

export const removeItemFromCart = dispatch =>
  item =>
    () => {
      container.removeItemFromCart(item, store.getState().cart);
      dispatch({ type: CART.REMOVE_ITEM_FROM_CART });
    };

export const increaseItemQuantity = dispatch =>
  item =>
    () => {
      container.increaseItemQuantityInCart(item, store.getState().cart);
      dispatch({ type: CART.INCREASE_ITEM_QUANTITY });
    };

export const decreaseItemQuantity = dispatch =>
  item =>
    () => {
      container.decreaseItemQuantityInCart(item, store.getState().cart);
      dispatch({ type: CART.DECREASE_ITEM_QUANTITY });
    };

export default {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart
};
