import * as Category from '../domain/Category';

export default ({ repository }) =>
  async () => {
    const categories = await repository.getCategories();
    return categories
      .map(category =>
        Category.create(category));
  };
