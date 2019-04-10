import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledCartIcon from './StyledCartIcon';
import CartSumary from './CartSummary';

export default ({ quantity }) =>
  (
    <StyledCartIcon>
      <div className="quantity">{quantity}</div>
      <FontAwesomeIcon icon="shopping-cart" />
      <CartSumary />
    </StyledCartIcon>
  );
