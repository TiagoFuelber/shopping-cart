import uuidv1 from 'uuid/v1';

export const create = () =>
  ({
    id: uuidv1(),
    items: []
  });

export default {
  create
};
