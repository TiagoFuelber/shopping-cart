import createCart from './application/createCart';
import addItemToCart from './application/addItemToCart';
import clearCart from './application/clearCart';
import decreaseItemQuantityInCart from './application/decreaseItemQuantityInCart';
import getItemsFromCart from './application/getItemsFromCart';
import increaseItemQuantityInCart from './application/increaseItemQuantityInCart';
import createProduct from './application/createProduct';
import makeGetProducts from './application/getProducts';
import makeGetCategories from './application/getCategories';
import ProductsRepository from './infra/ProductsRepository';
import removeItemFromCart from './application/removeItemFromCart';
import getCartTotalPrice from './application/getCartTotalPrice';

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
