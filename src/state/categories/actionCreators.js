import { CATEGORIES } from '../actionTypes';
import container from '../../container';

export const getCategories = dispatch =>
  async () => {
    const categories = await container.getCategories();

    dispatch({
      type: CATEGORIES.GET_CATEGORIES,
      categories
    });
  };

export default { getCategories };
