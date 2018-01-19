import React from 'react';
import PropTypes from 'prop-types';
import './RollAnalysis.css';

function renderTable(analysisResult) {
  const tableJsx = analysisResult.analysisMatrix.map((rowData) => (
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

  return (
    <div className="analysis-section">

      {tableJsx}

      <div className="die-row">
        <p id="saved-label">running total:</p>
        <p id="saved-total">{analysisResult.rollTotalPoints}</p>
      </div>

    </div>
  );
}

const propTypes = {
  analysisResult: PropTypes.shape({
    analysisMatrix: PropTypes.arrayOf(
      PropTypes.shape({
        dieValue: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        pointsPerDie: PropTypes.number.isRequired,
        totalForValue: PropTypes.number.isRequired,
      })
    ).isRequired,
    rollTotalPoints: PropTypes.number.isRequired,
  }).isRequired,
};

const RollAnalysisPres = props => renderTable(props.analysisResult);

RollAnalysisPres.propTypes = propTypes;
export default RollAnalysisPres;
