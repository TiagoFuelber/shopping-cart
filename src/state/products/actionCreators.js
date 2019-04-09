import { PRODUCTS } from '../actionTypes';
import container from '../../container';

const getMappedProducts = () =>
  container.getProducts();

export const getProducts = dispatch =>
  () =>
    dispatch({
      type: PRODUCTS.GET_PRODUCTS,
      products: getMappedProducts()
    });

export const filterByCategory = dispatch =>
  categoryId =>
    () =>
      dispatch({
        type: PRODUCTS.FILTER_BY_CATEGORY,
        products: getMappedProducts().filter(product =>
          (categoryId !== null ? product.idCategory === categoryId : product))
      });

export default { getProducts, filterByCategory };
