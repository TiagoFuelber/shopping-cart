import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';
import CartIcon from '../cartIcon/CartIcon';
import NoStyleRouterLink from '../NoStyleRouterLink';
import { TimeService } from '../../../services';
import { Cart } from '../../../domain';

const Header = ({ cart, timer }) =>
  (
    <StyledHeader>
      <NoStyleRouterLink to="/">
        <div className="center bold title">GroceryStore</div>
      </NoStyleRouterLink>
      {cart.items.length ? (
        <div>
        Your cart will expire in:
          {` ${TimeService.secondsToMinutes(timer.remainingTime)}`}
        </div>
      ) : null}
      <NoStyleRouterLink to="/my-cart">
        <CartIcon quantity={cart.items.length} />
      </NoStyleRouterLink>
    </StyledHeader>
  );

Header.propTypes = {
  cart: PropTypes.instanceOf(Cart).isRequired,
  timer: PropTypes.shape({
    remainingTime: PropTypes.number,
    interval: PropTypes.func
  }).isRequired
};

const mapStateToProps = ({ cart, timer }) =>
  ({ cart, timer });

export default connect(
  mapStateToProps,
  null
)(Header);
