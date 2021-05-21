import { get, pipe, set } from 'lodash/fp';

export const addEntity = (state, entity, id) =>
  pipe(set(['entities', id], entity), set('ids', state.ids.concat(id)))(state);

export const addToChildren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property];
  const children = get(path, state);
  return set(path, children.concat(childId), state);
};
