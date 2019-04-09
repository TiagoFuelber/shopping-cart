import React from 'react';
import { connect } from 'react-redux';
import StyledHeader from './StyledHeader';
import CartIcon from '../cartIcon/CartIcon';
import NoStyleRouterLink from '../NoStyleRouterLink';
import secondsToMinutes from '../../../services/TimeService';

const Header = ({ cart, timer }) =>
  (
    <StyledHeader>
      <NoStyleRouterLink to="/">
        <div className="center bold title">GroceryStore</div>
      </NoStyleRouterLink>
      {cart.items.length ? (
        <div>
        Your cart will expire in:
          {` ${secondsToMinutes(timer.remainingTime)}`}
        </div>
      ) : null}
      <NoStyleRouterLink to="/my-cart">
        <CartIcon quantity={cart.items.length} />
      </NoStyleRouterLink>
    </StyledHeader>
  );

const mapStateToProps = ({ cart, timer }) =>
  ({ cart, timer });

export default connect(
  mapStateToProps,
  null
)(Header);
