import * as React from 'react';
import './Key.scss';

interface Props {
  id: number;
  name: string;
  sound: string;
}

const Key: React.SFC<Props> = ({ id, name, sound }) => {
  return (
    <div data-key={id} className="key">
      <kbd>{name}</kbd>
      <span className="sound">{sound}</span>
    </div>
  )
}

export default Key;