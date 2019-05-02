import * as Product from '../domain/Product';

export default ({ repository }) =>
  async () => {
    const products = await repository.getProducts();
    return products
      .map(product =>
        Product.create(product));
  };
