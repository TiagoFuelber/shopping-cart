import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import StyledCartSummary from './StyledCartSummary';

const CartSumary = ({ cart }) =>
  (
    <StyledCartSummary>
      {cart.items.length ? (
        <Fragment>
          <p className="bold center">Cart Summary</p>
          <ul>
            {cart.items.map(item =>
              (
                <li key={item.id}>
                  <span>{`${item.name} - Qtd: ${item.quantity}`}</span>
                </li>
              ))}
          </ul>
        </Fragment>
      ) : (
        <p className="bold center">Your cart is empty!</p>
      )}
    </StyledCartSummary>
  );

const mapStateToProps = ({ cart }) =>
  ({ cart });

export default connect(
  mapStateToProps,
  null
)(CartSumary);
