import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "../styles/FlightInput.css";

const FlightInput = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmitButton = (event) => {
    event.preventDefault();

    // Get form field values
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("exampleInputEmail1");
    const destinationInput = document.getElementById("destinationInput");
    const fromInput = document.getElementById("fromInput");

    // Validate form fields
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      destinationInput.value === "" ||
      fromInput.value === ""
    ) {
      // Display error modal
      setShowModal(true);
      return;
    }

    // Form submission successful
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                required
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
                required
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
                required
              />
            </div>
            <div className="col">
              <label htmlFor="fromInput">From:</label>
              <input
                type="text"
                className="form-control input-field"
                id="fromInput"
                placeholder="e.g Vienna"
                required
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill out all fields before submitting the form.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FlightInput;
