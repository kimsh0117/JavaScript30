import * as React from 'react';
import './Panel.scss';

interface Props {
  first: string;
  second: string;
  third: string;
  id: number;
}

const Panel: React.FC<Props> = ({ first, second, third, id }) => {
  const [click, setClick] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const toggleActive = (e: React.TransitionEvent): void => {
    if(e.propertyName.includes('flex')) {
      setEnd(!end);
    }
  }
  const name = click && end ? `panel panel${id + 1} open open-active` : click ? `panel panel${id + 1} open` : `panel panel${id + 1}`;
  return (
    <div className={name} onTransitionEnd={(e: React.TransitionEvent) => toggleActive(e)} onClick={() => setClick(!click)}>
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
    </div>
  );
};


export default Panel;