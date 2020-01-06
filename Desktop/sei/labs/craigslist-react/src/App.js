import React from 'react';
import Header from "./components/Header"
import Results from "./components/Results"
import "./App.css"


function App() {
  return (
          <>
          <div className="header">
             <Header/>
          </div>
          <Results/>
       </>
         );
}

export default App;
