import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  extractAndSave,
  newRoll,
} from './actions/actions';
import RollResult from './RollResult/RollResult';
import RollAnalysis from './RollAnalysis/RollAnalysis';
import SavedDice from './SavedDice/SavedDice';
import './App.css';

const mapStateToProps = state => ({
  allowed: state.allowed,
  roll: state.roll,
  saved: state.saved,
});

const mapDispatchToProps = dispatch => ({
  clickRoll: (oldRollLength) => {
    dispatch(newRoll(oldRollLength));
  },
  clickSave: (roll, saved) => {
    dispatch(extractAndSave(roll, saved));
  }
});

const propTypes = {
  allowed: PropTypes.shape({
    roll: PropTypes.bool.isRequired,
    save: PropTypes.bool.isRequired,
  }).isRequired,
  roll: PropTypes.arrayOf(PropTypes.number).isRequired,
  saved: PropTypes.arrayOf(PropTypes.number).isRequired,
  clickRoll: PropTypes.func.isRequired,
  clickSave: PropTypes.func.isRequired,
};

const App = (props) => {
  const clickRoll = () => props.clickRoll(props.roll.length);
  const clickSave = () => props.clickSave(props.roll, props.saved);

  return (
    <div id="app">

      <div id="app-header">
        <h2>farklife</h2>
      </div>

      <div id="app-content">

        <div className="roll-row">
          <div
            className={props.allowed === 'roll' ? "active-button" : "disabled-button"}
            onClick={props.allowed === 'roll' ? clickRoll : null}
          >
            <p>roll</p>
          </div>
          <RollResult roll={props.roll} />
        </div>

        <div className="roll-row">
          <div
            className={props.allowed === 'save' ? "active-button" : "disabled-button"}
            onClick={props.allowed === 'save' ? clickSave : null}
          >
            <p>save</p>
          </div>
          <SavedDice saved={props.saved} />
        </div>

        <RollAnalysis roll={props.saved} />

      </div>

    </div>
  );
};

App.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
