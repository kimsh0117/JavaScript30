import * as React from 'react';
import './Main.scss';

const Main: React.SFC = () => (
  <form className="search-form">
    <input type="text" className="search" placeholder="City or State"/>
    <ul className="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
);

export default Main;