import React from 'react';
import './RollAnalysis.css';

function renderTable(analysisResult) {
  const labelRow = (
    <div className="at-label-row" key={0}>
      <div className="at-cell"><p>die value</p></div>
      <div className="at-cell"><p>count</p></div>
      <div className="at-cell"><p>points per die</p></div>
      <div className="at-cell"><p>total points</p></div>
    </div>
  );
  const sumRow = (
    <div className="at-sum-row" key={7}>
      <div className="at-cell-placeholder" />
      <div className="at-cell-placeholder" />
      <div className="at-cell-placeholder" />
      <div className="at-cell"><p>{analysisResult.rollTotalPoints}</p></div>
    </div>
  );

  let tableJsx = [];

  tableJsx.push(labelRow);

  analysisResult.analysisMatrix.forEach((rowData) => {
    tableJsx.push(
      <div className="at-row" key={rowData.dieValue}>
        <div className="at-cell"><p>{rowData.dieValue}</p></div>
        <div className="at-cell"><p>{rowData.count}</p></div>
        <div className="at-cell"><p>{rowData.pointsPerDie}</p></div>
        <div className="at-cell"><p>{rowData.totalForValue}</p></div>
      </div>
    );
  });

  tableJsx.push(sumRow);

  return (
    <div className="at-body">
      {tableJsx}
    </div>
  );
}

const RollAnalysisPres = props => (
  <div className="analysis-box">
    <h3>analysis</h3>
    {renderTable(props.analysisResult)}
  </div>
);

export default RollAnalysisPres;
