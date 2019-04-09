export default (cart) => {
  cart.items = [];
  return { ...cart };
};
