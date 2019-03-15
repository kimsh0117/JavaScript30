import * as React from 'react';
import './Main.scss';
import { AjaxState } from 'store/models';

interface Props {
  countries: AjaxState;
}

const Main: React.SFC<Props> = ({ countries }) => (
  <form className="search-form">
    <input type="text" className="search" placeholder="City or State"/>
    <ul className="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
);

export default Main;