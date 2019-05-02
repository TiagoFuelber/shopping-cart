import { ProductsRepository } from './infra';
import {
  createCart,
  addItemToCart,
  clearCart,
  decreaseItemQuantityInCart,
  getItemsFromCart,
  increaseItemQuantityInCart,
  createProduct,
  makeGetProducts,
  makeGetCategories,
  removeItemFromCart,
  getCartTotalPrice
} from './application';

const getProducts = makeGetProducts({ repository: ProductsRepository });
const getCategories = makeGetCategories({ repository: ProductsRepository });

export default {
  createCart,
  addItemToCart,
  clearCart,
  decreaseItemQuantityInCart,
  getItemsFromCart,
  increaseItemQuantityInCart,
  createProduct,
  getProducts,
  getCategories,
  removeItemFromCart,
  getCartTotalPrice
};
