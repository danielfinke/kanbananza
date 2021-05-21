import { combineReducers } from 'redux';

import cards from './card-reducer';
import lists from './list-reducer';

export default combineReducers({
  lists,
  cards,
});
