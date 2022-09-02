import React from 'react';
import Login from "./Login"
import Signup from './signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Signup />} />
      </Routes>
    </Router>

    
  );
}

export default App;
