export default (item, cart) => {
  if (!cart.items.find(cartItem =>
    cartItem.id === item.id)) {
    cart.items.push({ ...item, quantity: 1 });
  }

  return { ...cart };
};
