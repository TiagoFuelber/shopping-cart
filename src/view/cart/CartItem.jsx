import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledCartItem from './StyledCartItem';
import * as cartActions from '../../state/cart/actionCreators';

const CartItem = ({
  item, removeItem, decreaseQuantity, increaseQuantity
}) =>
  (
    <StyledCartItem>
      <div className="quantity-container">
        <FontAwesomeIcon icon="minus-square" onClick={decreaseQuantity(item)} />
        <span className="quantity">{item.quantity}</span>
        <FontAwesomeIcon icon="plus-square" onClick={increaseQuantity(item)} />
        <span className="description">{item.name}</span>
      </div>
      <FontAwesomeIcon icon="trash" onClick={removeItem(item)} />
    </StyledCartItem>
  );

const mapDispatchToProps = dispatch =>
  ({
    decreaseQuantity: cartActions.decreaseItemQuantity(dispatch),
    increaseQuantity: cartActions.increaseItemQuantity(dispatch),
    removeItem: cartActions.removeItemFromCart(dispatch)
  });

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
