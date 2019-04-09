import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faTrash,
  faMinusSquare,
  faPlusSquare,
  faTimes,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './view/ui/styles/GlobalStyle';
import ProductsPage from './view/products/ProductsPage';
import store from './state/store';
import CartPage from './view/cart/CartPage';

library.add(faShoppingCart);
library.add(faTrash);
library.add(faMinusSquare);
library.add(faPlusSquare);
library.add(faTimes);
library.add(faCheckCircle);

const App = () =>
  (
    <Provider store={store}>
      <HashRouter>
        <Normalize />
        <GlobalStyle />
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/my-cart" component={CartPage} />
      </HashRouter>
    </Provider>
  );

export default App;
