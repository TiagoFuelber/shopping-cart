import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledBasePage from '../ui/styles/StyledBasePage';
import Container from '../ui/Container';
import Header from '../ui/header/Header';
import CartItem from './CartItem';
import getCartTotalPrice from '../../application/getCartTotalPrice';
import toReais from '../../services/toReais';
import StyledCartTotal from './StyledCartTotal';
import Button from '../ui/buttons/Button';
import Modal from '../ui/modal/Modal';
import { Blue } from '../ui/styles/constants';
import StyledSuccessCheckout from './StyledSuccessCheckout';
import * as cartActions from '../../state/cart/actionCreators';

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
                  <FontAwesomeIcon icon="check-circle" size="6x" color={Blue} />
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

const mapStateToProps = ({ cart }) =>
  ({ cart });

const mapDispatchtoProps = dispatch =>
  ({
    clearCart: cartActions.clearCart(dispatch)
  });

export default connect(mapStateToProps, mapDispatchtoProps)(CartPage);
