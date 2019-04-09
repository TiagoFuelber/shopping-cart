import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledCartIcon from './StyledCartIcon';

export default ({ quantity }) =>
  (
    <StyledCartIcon>
      <div className="quantity">{quantity}</div>
      <FontAwesomeIcon icon="shopping-cart" />
    </StyledCartIcon>
  );
