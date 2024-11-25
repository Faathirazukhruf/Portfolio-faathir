import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portofolio from './pages/Portofolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portofolio />} />
      </Routes>
    </Router>
  );
}

export default App;
