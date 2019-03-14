import * as React from 'react';
import Panel from 'component/panels/panel';
import './Main.scss';

const data = [
  {
    first: 'Hey',
    second: 'Let\'s',
    third: 'Dance',
  },
  {
    first: 'Give',
    second: 'Take',
    third: 'Receive',
  },
  {
    first: 'Experience',
    second: 'It',
    third: 'Today',
  },
  {
    first: 'Give',
    second: 'All',
    third: 'You',
  },
  {
    first: 'Life',
    second: 'In',
    third: 'Motion',
  },
]

const Main: React.FC = () => (
  <div className="panels">
    {data.map(({ first, second, third }, i) => (
      <Panel first={first} second={second} third={third} id={i} key={i} />
    ))}
  </div>
);

export default Main;

