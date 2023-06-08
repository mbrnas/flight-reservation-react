import React from "react";
import "./styles/App.css";
import Title from "./components/Title";
import FlightInput from "./components/FlightInput";

function App() {
  return (
    <div className="App">
      <Title />
      <FlightInput />
    </div>
  );
}

export default App;
