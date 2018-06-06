import React, { Component } from 'react';

const data = [
  {
    "id": 1,
    "name": "Curso Desarrollo Web",
    "price": 359
  },
  {
    "id": 2,
    "name": "Curso Node Js desde 0",
    "price": 299
  },
  {
    "id": 3,
    "name": "Curso HTML desde 0",
    "price": 149
  }
]

export const List = ({ keyName, keyPrice }) => (
  <ul>
    { data.map((item, index) => (
        <li key={index}>
          <span>{item[keyName]}</span>
          <span> - </span>
          <span>{item[keyPrice]}</span>
        </li>
      ))
    }
  </ul>
);

/*
export const List = ({ keyName, keyPrice }) => (
  <ul>
    <For each="item" of={data}>
      <li key={index}>
        <span>{item[keyName]}</span>
        <span> - </span>
        <span>{item[keyPrice]}</span>
      </li>
    </For>
  </ul>
);
*/
