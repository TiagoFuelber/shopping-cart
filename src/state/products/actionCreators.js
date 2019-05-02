import { PRODUCTS } from '../actionTypes';
import container from '../../container';

export const getProducts = dispatch =>
  () =>
    new Promise(async (resolve) => {
      const products = await container.getProducts();

      dispatch({
        type: PRODUCTS.GET_PRODUCTS,
        products
      });

      resolve();
    });

export const filterByCategory = dispatch =>
  categoryId =>
    () =>
      new Promise(async (resolve) => {
        const products = await container.getProducts();

        dispatch({
          type: PRODUCTS.FILTER_BY_CATEGORY,
          products: products
            .filter(product =>
              (categoryId !== null ? product.idCategory === categoryId : product))
        });

        resolve();
      });

export default { getProducts, filterByCategory };
