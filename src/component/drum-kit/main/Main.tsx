import * as React from 'react';
import Key from 'component/drum-kit/key';
import './Main.scss';
import { boom, clap, hihat, kick, openhat, ride, snare, tink, tom } from 'assets/sound';

const data = {
  65: {
    id: 65,
    name: 'A',
    sound: 'CLAP',
    src: clap,
  },
  83: {
    id: 83,
    name: 'S',
    sound: 'HIHAT',
    src: hihat,
  },
  68: {
    id: 68,
    name: 'D',
    sound: 'KICK',
    src: kick,
  },
  70: {
    id: 70,
    name: 'F',
    sound: 'OPENHAT',
    src: openhat,
  },
  71: {
    id: 71,
    name: 'G',
    sound: 'BOOM',
    src: boom,
  },
  72: {
    id: 72,
    name: 'H',
    sound: 'RIDE',
    src: ride,
  },
  74: {
    id: 74,
    name: 'J',
    sound: 'SNARE',
    src: snare,
  },
  75: {
    id: 75,
    name: 'K',
    sound: 'TOM',
    src: tom,
  },
  76: {
    id: 76,
    name: 'L',
    sound: 'TINK',
    src: tink,
  },
}

class Main extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', (e: KeyboardEvent): void => {
      const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key: any | null = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();

      key.classList.add('playing');
      key.addEventListener('transitionend', (e: any) => {
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
      });
    })
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', (e: KeyboardEvent): void => {

    })
  }

  render() {
    return (
      <div className="drum-kit">
        {Object.values(data).map(({ id, name, sound, src }) => (
          <div key={id}>
            <Key id={id} name={name} sound={sound} />
            <audio data-key={id} src={src} />
          </div>
        ))}
      </div>
    )
  }
}

export default Main;