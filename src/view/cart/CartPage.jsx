import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCartTotalPrice } from '../../application';
import { toReais } from '../../services';
import { cartActions } from '../../state';
import { Cart } from '../../domain';
import {
  StyledSuccessCheckout,
  StyledCartTotal,
  StyledBasePage,
  Container,
  constants,
  CartItem,
  Button,
  Header,
  Modal
} from '..';

const EmptyCartMessage = () =>
  (
    <p>
    Your cart is empty!{' '}
      <Link to="/">
        <span>Go to products Page.</span>
      </Link>
    </p>
  );

class CartPage extends Component {
  state = {
    successModalIsOpen: false
  };

  closeModal = () => {
    const { history, clearCart } = this.props;

    this.setState({ successModalIsOpen: false }, () => {
      history.push('/');
      clearCart();
    });
  }

  openModal = () => {
    this.setState({ successModalIsOpen: true });
  }

  render() {
    const { cart, history } = this.props;
    const { successModalIsOpen } = this.state;

    return (
      <Fragment>
        <Header />
        <StyledBasePage withHeader>
          <Container>
            <h1>Checkout Page</h1>
            {cart.items.length ? (
              cart.items.map(item =>
                <CartItem key={item.id} item={item} history={history} />)
            ) : (
              <EmptyCartMessage />
            )}
            {cart.items.length ? (
              <StyledCartTotal>
                <span className="upper">Cart total: </span>
                <span className="price">{toReais(getCartTotalPrice(cart))}</span>
              </StyledCartTotal>
            ) : null}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '15px'
              }}
            >
              <Link to="/">Buy more</Link>
              <Button className="upper" onClick={this.openModal}>Check it out</Button>
            </div>
            {successModalIsOpen && (
              <Modal onClose={this.closeModal}>
                <StyledSuccessCheckout>
                  <FontAwesomeIcon icon="check-circle" size="6x" color={constants.Blue} />
                  <h1>Successful checkout!</h1>
                  <Button onClick={this.closeModal}>Close</Button>
                </StyledSuccessCheckout>
              </Modal>
            )}
          </Container>
        </StyledBasePage>
      </Fragment>
    );
  }
}

CartPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  clearCart: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Cart).isRequired
};

const mapStateToProps = ({ cart }) =>
  ({ cart });

const mapDispatchtoProps = dispatch =>
  ({
    clearCart: cartActions.clearCart(dispatch)
  });

export default connect(mapStateToProps, mapDispatchtoProps)(CartPage);
