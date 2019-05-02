import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledCartIcon from './StyledCartIcon';
import CartSumary from './CartSummary';

const CartIcon = ({ quantity }) =>
  (
    <StyledCartIcon>
      <div className="quantity">{quantity}</div>
      <FontAwesomeIcon icon="shopping-cart" />
      <CartSumary />
    </StyledCartIcon>
  );

CartIcon.propTypes = {
  quantity: PropTypes.number.isRequired
};

export default CartIcon;
