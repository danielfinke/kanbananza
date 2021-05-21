import React from 'react';

import Users from './Users';
import ConnectedCreateList from '../containers/ConnectedCreateList';
import ConnectedLists from '../containers/ConnectedLists';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <ConnectedCreateList />
        <ConnectedLists />
      </section>
    </main>
  );
};

export default Application;
