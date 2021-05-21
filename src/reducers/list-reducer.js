import { addToChildren } from './utilities';
import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, { type, payload }) => {
  if (type === 'CARD_CREATE') {
    const { listId, cardId } = payload;

    return addToChildren(lists, listId, 'cards', cardId);
  }

  return lists;
};

export default listsReducer;
