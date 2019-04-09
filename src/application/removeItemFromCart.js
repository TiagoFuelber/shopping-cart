export default (item, cart) => {
  const index = cart.items.findIndex(cartItem =>
    cartItem.id === item.id);

  if (index !== -1) {
    cart.items.splice(index, 1);
  }

  return { ...cart };
};
