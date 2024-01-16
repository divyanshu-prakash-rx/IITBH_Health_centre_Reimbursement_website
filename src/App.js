// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Form1 from './components/Form1';
import React from 'react';
import Options from './components/Options';
import Form2 from './components/Form2';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Thankyou from './components/Thankyou';

function App() {
  return (
    <>
    {/* <Options/> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Options" element={<Options />} />
          <Route path="/FormOPD" element={<Form2 />} />
          <Route path="/FormIPD" element={<Form1 />} />
          <Route path="/Thankyou" element={<Thankyou/>} />
        </Routes >

      </Router >
    </>
  );
}

export default App;
