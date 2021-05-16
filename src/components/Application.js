import React from 'react';

import Users from './Users';
import CreateList from './CreateList';
import ConnectedLists from '../containers/ConnectedLists';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateList />
        <ConnectedLists />
      </section>
    </main>
  );
};

export default Application;
