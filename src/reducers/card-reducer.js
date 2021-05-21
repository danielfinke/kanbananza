import { addEntity } from './utilities';
import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, { type, payload }) => {
  if (type === 'CARD_CREATE') {
    const { card, cardId } = payload;

    return addEntity(cards, card, cardId);
  }

  return cards;
};

export default cardsReducer;
