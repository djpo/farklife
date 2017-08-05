import React, { Component } from 'react';
import RollResult from './RollResult/RollResult';
import RollAnalysis from './RollAnalysis/RollAnalysis';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      roll: [1, 1, 1, 1, 1, 1]
    };
    this.handleRollButton = this.handleRollButton.bind(this);
  }
  handleRollButton() {
    const randomDie = () => Math.ceil(Math.random() * 6);

    let newRoll = [];
    for (let i = 0; i < 6; i++) {
      newRoll.push(randomDie());
    }

    this.setState({ roll: newRoll });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>farklife</h2>
        </div>
        <div className="roll-row">
          <div className="roll-button" onClick={this.handleRollButton}>
            <p>roll</p>
          </div>
          <RollResult roll={this.state.roll} />
        </div>

        <RollAnalysis roll={this.state.roll} />

      </div>
    );
  }
}

export default App;
