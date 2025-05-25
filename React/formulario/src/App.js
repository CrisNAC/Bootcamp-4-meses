import React, { useState } from 'react';
import './App.css';
import Formulario from './formulario';
import Resultado from './resultado';

function App() {  
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });

  return (
    <div>
      <Formulario input={state} setInput={setState}></Formulario>
      <Resultado data={state}></Resultado>
    </div>
  );
}

export default App;
