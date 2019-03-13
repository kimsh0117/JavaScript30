import * as React from 'react';
import Key from 'component/drum-kit/key';
import './Main.scss';
import sound from 'assets/sound';

const data = {
  65: {
    id: 65,
    name: 'A',
    sound: 'CLAP',
  },
  83: {
    id: 83,
    name: 'S',
    sound: 'HIHAT',
  },
  68: {
    id: 68,
    name: 'D',
    sound: 'KICK',
  },
  70: {
    id: 70,
    name: 'F',
    sound: 'OPENHAT',
  },
  71: {
    id: 71,
    name: 'G',
    sound: 'BOOM',
  },
  72: {
    id: 72,
    name: 'H',
    sound: 'RIDE',
  },
  74: {
    id: 74,
    name: 'J',
    sound: 'SNARE',
  },
  75: {
    id: 75,
    name: 'K',
    sound: 'TOM',
  },
  76: {
    id: 76,
    name: 'L',
    sound: 'TINK',
  },
} as { [key: number]: any }

interface MainState {
  currentCode: boolean | number;
}

class Main extends React.Component<{}, MainState> {
  state = {
    currentCode: false,
  }
  componentWillMount() {
    document.addEventListener('keydown', (e: KeyboardEvent): void => this.handleKeydown(e), false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e: KeyboardEvent): void => this.handleKeydown(e), false)
  }

  handleKeydown(event: KeyboardEvent) {
    this.setState({ currentCode: false });
    const { keyCode } = event;
    let audioObj;
    if (data[keyCode]) {
      this.setState({ currentCode: keyCode });
      audioObj = new Audio(sound[data[keyCode].sound.toLowerCase()]);
      audioObj.play();
    }
  }
  handleTransitionEnd(event: React.TransitionEvent) {
    if (event.propertyName !== 'transform') return;
    this.setState({ currentCode: false });
  }
  render() {
    return (
      <div className="drum-kit">
        {Object.values(data).map(({ id, name, sound }) => {
          const className = id === this.state.currentCode ? 'key playing' : 'key';
          return <Key name={name} sound={sound} className={className} key={id} transitionend={this.handleTransitionEnd.bind(this)} />;
        })}
      </div>
    )
  }
}

export default Main;