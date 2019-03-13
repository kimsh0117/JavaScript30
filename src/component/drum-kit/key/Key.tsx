import * as React from 'react';
import './Key.scss';

interface Props {
  name: string;
  sound: string;
  className: string;
  transitionend: (e: React.TransitionEvent) => void;
}

const Key: React.SFC<Props> = ({ name, sound, className, transitionend }) => {
  return (
    <div className={className} onTransitionEnd={transitionend}>
      <kbd>{name}</kbd>
      <span className="sound">{sound}</span>
    </div>
  )
}

export default Key;