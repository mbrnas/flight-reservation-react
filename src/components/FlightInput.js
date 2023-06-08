import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FlightInput.css";
const FlightInput = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form>
        <div className="form-group mb-4">
          <label htmlFor="nameInput">Your Name:</label>
          <input
            type="text"
            className="form-control input-field"
            id="nameInput"
            placeholder="Jane Doe"
          />
        </div>
        <div class="form-group mb-4">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="destinationInput">Destination:</label>
          <input
            type="text"
            className="form-control input-field"
            id="destinationInput"
            placeholder="e.g Paris"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="fromInput">From:</label>
          <input
            type="text"
            className="form-control input-field"
            id="fromInput"
            placeholder="e.g Vienna"
          />
        </div>
      </form>
    </div>
  );
};

export default FlightInput;
