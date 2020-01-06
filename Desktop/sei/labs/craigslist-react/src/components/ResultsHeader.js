import React from 'react';
import Breadcrumbs from "./Breadcrumbs"


function ResultsHeader() {
  return (
    <div className="couch">
      <div className='breadcrumbs'>
        <Breadcrumbs/>
      </div>
      <h1>Couch</h1>
      <hr/> 
    </div>
  );
}

export default ResultsHeader;