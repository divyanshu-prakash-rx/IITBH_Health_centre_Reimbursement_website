// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Form1 from './components/Form1';
import React from 'react';
import Options from './components/Options';
import Form2 from './components/Form2';
import Student from './components/Student';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Thankyou from './components/Thankyou';

function App() {
  return (
    <>
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/options" element={<Options />} />

          <Route path="/student" element={<Student />} />

          <Route path="/formopd" element={<Form2 />} />
          <Route path="/formipd" element={<Form1 />} />
          <Route path="/thankyou" element={<Thankyou/>} />
        </Routes >
      </Router >
    </div>
    </>
  );
}

export default App;
