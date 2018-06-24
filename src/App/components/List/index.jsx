import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const data = [
  {
    id: 1,
    name: 'Curso React JS',
    price: 359,
    description: 'lorem...',
  },
  {
    id: 2,
    name: 'Curso Angular',
    price: 299,
    description: 'lorem...',
  },
  {
    id: 3,
    name: 'Curso Node Js',
    price: 149,
    description: 'lorem...',
  },
];

export const List = ({ keyName, keyPrice, keyDescription }) => (
  <ul className="b-list">
    <For each="item" of={data}>
      <li key={item.id} className="b-list_item">
        <span className="b-list_item__title">{item[keyName]}</span>
        <span className="b-list_item__price">S/. {item[keyPrice]}</span>
        <span className="b-list_item__description">{item[keyDescription]}</span>
      </li>
    </For>
  </ul>
);

List.propTypes = {
  keyName: PropTypes.string.isRequired,
  keyPrice: PropTypes.string.isRequired,
  keyDescription: PropTypes.string.isRequired,
};

export default List;
