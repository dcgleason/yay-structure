import React from 'react';
import Result from "./Result"
import data from "../data.json"


function ResultsList() {
  return (
    <>
    <div className="container-list">
      <div>{data.map(item => <li><Result data={item}/></li>)}</div>
    </div>
    </>
  );
}

export default ResultsList;