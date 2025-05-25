import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admit from './components/Admit.Component';
import Update from './components/Update.Component';
import Details from './components/Details.Component';
import Patients from './components/Patients.Component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Admit />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/edit/:id' element={<Update />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
