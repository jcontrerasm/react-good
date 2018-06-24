import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export const Navigator = () => (
  <nav className="b-navigator">
    <NavLink
      to="/"
      activeClassName="is-active"
      exact
      className="b-navigator_link"
    >
      Home
    </NavLink>
    <NavLink
      to="/detail"
      activeClassName="is-active"
      exact
      className="b-navigator_link"
    >
      Detail
    </NavLink>
  </nav>
);

export default Navigator;
