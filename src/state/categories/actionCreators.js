import { CATEGORIES } from '../actionTypes';
import container from '../../container';

export const getCategories = dispatch =>
  () =>
    dispatch({
      type: CATEGORIES.GET_CATEGORIES,
      categories: container.getCategories()
    });

export default { getCategories };
