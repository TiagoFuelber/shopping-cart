import { CART } from '../actionTypes';
import * as Cart from '../../domain/Cart';

const initialState = Cart.create();

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD_TO_CART:
      return { items: [...state.items] };

    case CART.REMOVE_ITEM_FROM_CART:
      return { items: [...state.items] };

    case CART.INCREASE_ITEM_QUANTITY:
      return {
        items: state.items.map(item =>
          ({ ...item }))
      };

    case CART.DECREASE_ITEM_QUANTITY:
      return {
        items: state.items.map(item =>
          ({ ...item }))
      };

    default:
      return state;
  }
};

export default { cartReducer };
