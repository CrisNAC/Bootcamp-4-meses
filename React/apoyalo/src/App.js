import React from 'react';
import './App.css';
import PersonCard from './PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Jane"} lastName={"Doe"} age={45} hair={"Black"}/>
      <PersonCard name={"John"} lastName={"Smith"} age={88} hair={"Brown"}/>
      <PersonCard name={"Millard"} lastName={"Fillmore"} age={50} hair={"Brown"}/>
      <PersonCard name={"Maria"} lastName={"Smith"} age={62} hair={"Brown"}/>
    </div>
  );
}

export default App;
