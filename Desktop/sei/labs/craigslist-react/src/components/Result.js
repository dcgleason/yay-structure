import React from 'react';
import ResultsList from './ResultsList'


function Result(props) {
  return (
    <div className="result">
      <img className="couch-img" src={props.data.image}/>
      <div className="couch-container-info">
      <div className="couch-information">{props.data.title} <span>${props.data.cost}</span></div>
      </div>
    </div>
  );
}

export default Result;