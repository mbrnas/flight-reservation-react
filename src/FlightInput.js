import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const FlightInput = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Your Name:</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="destinationInput">Destination:</label>
          <input type="text" className="form-control" id="destinationInput" />
        </div>
        <div className="form-group">
          <label htmlFor="fromInput">From:</label>
          <input type="text" className="form-control" id="fromInput" />
        </div>
      </form>
    </div>
  );
};

export default FlightInput;
