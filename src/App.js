import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarHorizontal from './components/NavbarHorizontal';
import Form from './components/Form';
import TableOsoba from './components/Tableosoba';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div>
    <Router>
      <NavbarHorizontal />
      <Routes>
        <Route path="/" exact element={<TableOsoba />} />
        <Route path="/createosoba" element={<Form />} />
        <Route path="/updateosoba/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

