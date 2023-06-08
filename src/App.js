import React from 'react';
import './styles/App.css';
import Title from './components/Title';
import FlightInput from './components/FlightInput';
import SubmitData from './components/SubmitData';

function App() {
  return (
    <div className="App">
      <Title />
      <FlightInput/>  
      <SubmitData/>
    </div>
  );
}

export default App;
