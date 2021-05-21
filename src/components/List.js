import React from 'react';

import ConnectedCard from '../containers/ConnectedCard';
import ConnectedCreateCard from '../containers/ConnectedCreateCard';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <ConnectedCreateCard listId={list.id} />
      <div>
        {list.cards.map((cardId) => (
          <ConnectedCard key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
    </article>
  );
};

export default List;
