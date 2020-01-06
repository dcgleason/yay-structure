import React from 'react';
import Nav from "./Nav"

function Header() {
  return (
    <div className="title">
        <div className="logo">
          <h1>Criagslist</h1>
        </div>
          <div className="nav"><Nav/></div>
        </div>
             
  );
}

export default Header;