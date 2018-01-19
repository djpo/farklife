import React from 'react';
import PropTypes from 'prop-types';
import './RollAnalysis.css';

function renderTable(turnAnalysis) {
  return turnAnalysis.map((rowData) => (
    <div className="die-row" key={`die-row-${rowData.dieValue}`}>
      <div className="label-die">
        <p>{rowData.dieValue}</p>
      </div>
      <p id="die-count">{rowData.count}</p>
      <p>x</p>
      <p id="die-points">{rowData.pointsPerDie}</p>
      <p>=</p>
      <p id="die-total">{rowData.totalForValue}</p>
    </div>
  ));
}

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

const RollAnalysisPres = props => (
  <div className="analysis-section">

    {renderTable(props.turnAnalysis)}

    <div className="die-row">
      <p id="saved-label">running total:</p>
      <p id="saved-total">{props.turnRunningScore}</p>
    </div>

  </div>
);

RollAnalysisPres.propTypes = propTypes;
export default RollAnalysisPres;
