import * as React from 'react';
import './Main.scss';
import { AjaxState, countries } from 'store/models';
import List from 'component/ajax/list';

interface Props {
  countries: AjaxState,
}

const Main: React.SFC<Props> = ({ countries }) => {
  const findMatches = (wordToMatch: string, countries: countries[]): countries[] => countries.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
  })
  
  const [text, setInput] = React.useState('');

  const displayMatches = () => findMatches(text, countries.country).map(({ city, state, population }, i) => <List key={i} city={city} state={state} population={population} />)
  const defaultList = () => (<><li>Filter for a city</li><li>or a state</li></>);
  
  return (
    <form className="search-form">
      <input type="text" className="search" placeholder="City or State" onChange={(e) => setInput(e.target.value)} />
      <ul className="suggestions">
        {text === '' ? defaultList() : displayMatches()}
      </ul>
    </form>
  )
};

export default Main;