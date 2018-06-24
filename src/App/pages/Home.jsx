import React, { Fragment } from 'react';
import { List } from '@app/App/components/List';

export const Home = () => (
  <Fragment>
    <List
      keyName="name"
      keyPrice="price"
      keyDescription="description"
    />
  </Fragment>
);

export default Home;
