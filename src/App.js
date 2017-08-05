import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { newRoll } from './actions/actions';
import RollResult from './RollResult/RollResult';
import RollAnalysis from './RollAnalysis/RollAnalysis';
import './App.css';

const mapStateToProps = state => ({
  roll: state.roll,
});

const mapDispatchToProps = dispatch => ({
  newRoll: () => {
    dispatch(newRoll());
  },
});

const propTypes = {
  roll: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  newRoll: PropTypes.func.isRequired,
};

const App = props => (
  <div className="App">
    <div className="App-header">
      <h2>farklife</h2>
    </div>
    <div className="roll-row">
      <div className="roll-button" onClick={props.newRoll}>
        <p>roll</p>
      </div>
      <RollResult roll={props.roll} />
    </div>

    <RollAnalysis roll={props.roll} />

  </div>
);

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
