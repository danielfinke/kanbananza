import { CREATE_CARD } from '../actions/card-actions';
import { CREATE_LIST } from '../actions/list-actions';
import { addEntity, addToChildren } from './utilities';
import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, { type, payload }) => {
  if (type === CREATE_CARD) {
    const { listId, cardId } = payload;

    return addToChildren(lists, listId, 'cards', cardId);
  }
  if (type === CREATE_LIST) {
    const { list, listId } = payload;

    return addEntity(lists, list, listId);
  }

  return lists;
};

export default listsReducer;
