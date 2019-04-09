import { PRODUCTS } from '../actionTypes';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS:
      return action.products;

    case PRODUCTS.FILTER_BY_CATEGORY:
      return [...action.products];

    default:
      return state;
  }
};

export default { productsReducer };
