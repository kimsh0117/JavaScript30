import * as React from 'react';
import './Main.scss';

class Main extends React.Component {
  state = {
    secondsDegrees: ((new Date().getSeconds() / 60) * 360) + 90,
    minDegrees: ((new Date().getMinutes() / 60) * 360) + 90,
    hourDegrees: ((new Date().getHours() / 12) * 360) + 90,
    time: new Date(),
  }
  componentDidMount() {
    setInterval(() => this.setState({
      time: new Date(),
      secondsDegrees: ((new Date().getSeconds() / 60) * 360) + 90,
      minDegrees: ((new Date().getMinutes() / 60) * 360) + 90,
      hourDegrees: ((new Date().getHours() / 12) * 360) + 90,
    }), 1000)
  }
  componentWillUnmount() {
    clearInterval()
  }
  render() {
    const { time, secondsDegrees, minDegrees, hourDegrees } = this.state;
    return (
      <div className="clock-wrap">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand" style={{transform: `rotate(${hourDegrees}deg)`}}></div>
            <div className="hand min-hand" style={{transform: `rotate(${minDegrees}deg)`}}></div>
            <div className="hand second-hand" style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
          </div>
        </div>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    )
  }
};

export default Main;
