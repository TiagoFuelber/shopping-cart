import { expect } from 'chai';
import container from '../src/container';

describe('Cart', () => {
  const {
    createCart,
    addItemToCart,
    getItemsFromCart,
    increaseItemQuantityInCart,
    decreaseItemQuantityInCart,
    createProduct,
    removeItemFromCart,
    clearCart,
    getCartTotalPrice
  } = container;

  let myCart;

  beforeEach(() => {
    myCart = createCart();
  });

  describe('Smoke tests', () => {
    it('Should exist', () => {
      expect(myCart).to.exist;
    });

    it('Should have the property "items"', () => {
      expect(myCart).to.have.property('items');
    });

    it('Should have the property items with length 0', () => {
      expect(getItemsFromCart(myCart)).to.have.lengthOf(0);
    });
  });

  describe('Add items', () => {
    const cocaCola = createProduct({
      id: 0,
      idCategory: 0,
      name: 'Coca-cola lata',
      description: 'Coca-cola lata 350ml',
      price: 3.5,
      image: null
    });

    const hersheys = createProduct({
      id: 1,
      idCategory: 1,
      name: "Hershey's",
      description: "Hershey's 200g",
      price: 4.5,
      image: null
    });

    it('Is possible to add an item', () => {
      addItemToCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart)).to.have.lengthOf(1);
    });

    it('Is not possible to add duplicate item', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart)).to.have.lengthOf(1);
    });

    it('Is possible to add a different item', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(hersheys, myCart);

      expect(getItemsFromCart(myCart)).to.have.lengthOf(2);
    });

    it('Is possible to increment quantity of an item', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(hersheys, myCart);
      increaseItemQuantityInCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart)[0].quantity).to.be.equal(2);

      increaseItemQuantityInCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart)[0].quantity).to.be.equal(3);
    });

    it('Is possible to decrement quantity of an item', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(hersheys, myCart);
      increaseItemQuantityInCart(cocaCola, myCart);
      increaseItemQuantityInCart(cocaCola, myCart);
      decreaseItemQuantityInCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart)[0].quantity).to.be.equal(2);
    });

    it('If decrement an item with quantity 1, remove it from cart', () => {
      addItemToCart(cocaCola, myCart);
      decreaseItemQuantityInCart(cocaCola, myCart);
      expect(getItemsFromCart(myCart)).to.have.lengthOf(0);
    });

    it('Is possible to remove item from cart', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(cocaCola, myCart);
      removeItemFromCart(cocaCola, myCart);

      expect(getItemsFromCart(myCart).find(item =>
        item.id === 0)).to.be.undefined;
    });

    it('Is possible to clear all items from cart', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(hersheys, myCart);
      clearCart(myCart);

      expect(getItemsFromCart(myCart)).to.have.lengthOf(0);
    });

    it('Is possible to get the total price of the cart', () => {
      addItemToCart(cocaCola, myCart);
      addItemToCart(hersheys, myCart);
      increaseItemQuantityInCart(cocaCola, myCart);

      expect(getCartTotalPrice(myCart)).to.be.equal(11.5);
    });
  });
});
