import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeletePlayer = ({ show, handleClose, deletePlayer, player }) => {
  if (!player) return null; // Ensure player exists before rendering

  const handleDelete = () => {
    deletePlayer(player.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete <strong>{player.name}</strong>?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePlayer;
