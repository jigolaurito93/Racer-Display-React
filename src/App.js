import React from 'react';
import Navbar from "./components/Navbar"; 
import { Routes, Route } from "react-router-dom";
import ButtonsDisplay from './views/ButtonsDisplay';
import RacerDisplay from './views/RacerDisplay';

function App() {

  let name = 'Jose'

  return (
    <div className="App">
      <Navbar city={'Chicago'} username={name} />
      <div className="container">
        <Routes>
            <Route path='/' element={<ButtonsDisplay name={name} />} />
            <Route path='/racers' element={<RacerDisplay/>} />
        </Routes>
    
      </div>


    </div>
  );
}

export default App;
