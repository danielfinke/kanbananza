import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, { type, payload }) => {
  if (type === 'CARD_CREATE') {
    const { listId, cardId } = payload;
    const entities = { ...lists.entities };

    let list = entities[listId];
    list = {
      ...list,
      cards: list.cards.concat(cardId),
    };
    entities[listId] = list;

    return {
      ...lists,
      entities,
    };
  }

  return lists;
};

export default listsReducer;
