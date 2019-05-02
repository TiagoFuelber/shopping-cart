import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cartActions from '../../state/cart/actionCreators';
import StyledCartItem from './StyledCartItem';
import StyledConfirmModal from './StyledConfirmModal';
import { Modal, Button } from '..';
import { Cart, Product } from '../../domain';


class CartItem extends Component {
  state = {
    modalDeleteLastItemConfirmIsOpen: false
  };

  handleDecrease = item =>
    () => {
      const { decreaseQuantity, cart } = this.props;

      if (item.quantity === 1 && cart.items.length === 1) {
        this.setState({ modalDeleteLastItemConfirmIsOpen: true });
        return;
      }

      decreaseQuantity(item)();
    };

  closeModal = () =>
    this.setState({ modalDeleteLastItemConfirmIsOpen: false });

  confirmModal = () => {
    const { history, decreaseQuantity, item } = this.props;

    this.closeModal();
    decreaseQuantity(item)();
    history.push('/');
  };

  render() {
    const { item, removeItem, increaseQuantity } = this.props;
    const { modalDeleteLastItemConfirmIsOpen } = this.state;

    return (
      <StyledCartItem>
        <div className="quantity-container">
          <FontAwesomeIcon icon="minus-square" onClick={this.handleDecrease(item)} />
          <span className="quantity">{item.quantity}</span>
          <FontAwesomeIcon icon="plus-square" onClick={increaseQuantity(item)} />
          <span className="description">{item.name}</span>
        </div>
        <FontAwesomeIcon icon="trash" onClick={removeItem(item)} />
        {modalDeleteLastItemConfirmIsOpen && (
          <Modal onClose={this.closeModal}>
            <StyledConfirmModal>
              <h2>Do you really want to delete the last item?</h2>
              <div className="buttons">
                <Button onClick={this.closeModal}>No</Button>
                <Button secondary onClick={this.confirmModal}>
                  Yes
                </Button>
              </div>
            </StyledConfirmModal>
          </Modal>
        )}
      </StyledCartItem>
    );
  }
}

CartItem.propTypes = {
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Cart).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  item: PropTypes.instanceOf(Product).isRequired
};

const mapStateToProps = ({ cart }) =>
  ({ cart });

const mapDispatchToProps = dispatch =>
  ({
    decreaseQuantity: cartActions.decreaseItemQuantity(dispatch),
    increaseQuantity: cartActions.increaseItemQuantity(dispatch),
    removeItem: cartActions.removeItemFromCart(dispatch)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
