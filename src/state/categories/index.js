import { CATEGORIES } from '../actionTypes';

const initialState = [];

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES.GET_CATEGORIES:
      return [...action.categories];

    default:
      return state;
  }
};

export default { categoriesReducer };
