import * as Product from '../domain/Product';

export default ({ repository }) =>
  () =>
    repository.getProducts().map(product =>
      Product.create(product));
