import React from 'react';
import ResultsHeader from './ResultsHeader'
import ResultsList from "./ResultsList"


function Results() {
  return (
    <>
    <div className="results-header">
      <ResultsHeader/>
    </div> 
     <div className="results-list">
      <ResultsList/>
    </div>
  </>
  );
}

export default Results;