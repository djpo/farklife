import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RollAnalysisPres from './RollAnalysisPres';

const mapStateToProps = state => ({
  turnAnalysis: state.turnAnalysis,
  turnRunningScore: state.turnRunningScore,
});

const propTypes = {
  turnAnalysis: PropTypes.arrayOf(
    PropTypes.shape({
      dieValue: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      pointsPerDie: PropTypes.number.isRequired,
      totalForValue: PropTypes.number.isRequired,
    })
  ).isRequired,
  turnRunningScore: PropTypes.number.isRequired,
};

const RollAnalysis = props => (
  <RollAnalysisPres
    turnAnalysis={props.turnAnalysis}
    turnRunningScore={props.turnRunningScore}
  />
);

RollAnalysis.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(RollAnalysis);
