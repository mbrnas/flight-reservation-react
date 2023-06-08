import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FlightInput.css";
const FlightInput = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="nameInput">Your Name:</label>
          <input type="text" className="form-control input-field" id="nameInput" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="destinationInput">Destination:</label>
          <input
            type="text"
            className="form-control input-field"
            id="destinationInput"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="fromInput">From:</label>
          <input type="text" className="form-control input-field" id="fromInput" />
        </div>
      </form>
    </div>
  );
};

export default FlightInput;
