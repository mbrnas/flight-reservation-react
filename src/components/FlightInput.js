import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FlightInput.css";

const FlightInput = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitButton = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      {!submitted ? (
        <form>
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="nameInput">Your Name:</label>
              <input
                type="text"
                className="form-control input-field"
                id="nameInput"
                placeholder="Jane Doe"
              />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="destinationInput">Destination:</label>
              <input
                type="text"
                className="form-control input-field"
                id="destinationInput"
                placeholder="e.g Paris"
              />
            </div>
            <div className="col">
              <label htmlFor="fromInput">From:</label>
              <input
                type="text"
                className="form-control input-field"
                id="fromInput"
                placeholder="e.g Vienna"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmitButton}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <h3>Form submitted! Thank you</h3>
      )}
    </div>
  );
};

export default FlightInput;
