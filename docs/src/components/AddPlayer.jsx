import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddPlayer = ({ show, handleClose, addPlayer }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !nationality || !age) {
      setError("All fields are required.");
      return;
    }
    const newPlayer = { name, position, nationality, age: Number(age) };
    addPlayer(newPlayer);
    setName("");
    setPosition("");
    setNationality("");
    setAge("");
    setError("");
    handleClose(); // Close the modal after adding
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position:</Form.Label>
            <Form.Control
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nationality:</Form.Label>
            <Form.Control
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="success">
              Add Player
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPlayer;
