import React from 'react';
import ConnectedList from '../containers/ConnectedList';

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((listId) => (
        <ConnectedList listId={listId} />
      ))}
    </section>
  );
};

export default Lists;
