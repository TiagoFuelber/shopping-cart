import * as Category from '../domain/Category';

export default ({ repository }) =>
  () =>
    repository.getCategories().map(category =>
      Category.create(category));
