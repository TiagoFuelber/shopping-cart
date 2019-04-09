export default cart =>
  cart.items.reduce((acc, item) =>
    item.price * item.quantity + acc, 0);
