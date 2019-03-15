import * as React from 'react';
import './List.scss';

interface Props {
  city: string;
  state: string;
  population: string;
}

const List: React.SFC<Props> = ({ city, state, population }) => (
  <li>
    <span className="name">{city}, {state}</span>
    <span className="population">{population}</span>
  </li>
);

export default List;