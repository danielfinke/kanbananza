import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, { type, payload }) => {
  if (type === 'CARD_CREATE') {
    const { card, cardId } = payload;
    return {
      entities: {
        ...cards.entities,
        [cardId]: card,
      },
      ids: [...cards.ids, cardId],
    };
  }

  return cards;
};

export default cardsReducer;
