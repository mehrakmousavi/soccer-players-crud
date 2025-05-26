import React, { useState, useEffect } from "react";
import data from "./data/players.json";
import PlayerList from "./components/PlayerList";
import EditPlayer from "./components/EditPlayer";
import AddPlayer from "./components/AddPlayer";
import DeletePlayer from "./components/DeletePlayer";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Always reset to default players on page refresh
  const [players, setPlayers] = useState(data.players);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [showEditPlayer, setShowEditPlayer] = useState(false);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showDeletePlayer, setShowDeletePlayer] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  useEffect(() => {
    // Clear local storage and reset players on refresh
    localStorage.removeItem("players");
    setPlayers(data.players);
  }, []);

  const handleDelete = (id) => {
    setPlayerToDelete(id);
    setShowDeletePlayer(true);
  };

  const deletePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
    setShowDeletePlayer(false);
    Swal.fire("Deleted!", "Player has been removed.", "success");
  };

  const handleCancelDelete = () => {
    setShowDeletePlayer(false);
  };

  const handleEdit = (id) => {
    const player = players.find((player) => player.id === id);
    setCurrentPlayer(player);
    setShowEditPlayer(true);
  };

  const editPlayer = (updatedPlayer) => {
    setPlayers((prevPlayers) => prevPlayers.map((player) => player.id === updatedPlayer.id ? updatedPlayer : player));
    setCurrentPlayer(null);
    setShowEditPlayer(false);
    Swal.fire("Updated!", "Player details have been updated.", "success");
  };

  const handleCancelEdit = () => {
    setCurrentPlayer(null);
    setShowEditPlayer(false);
  };

  const handleAddPlayer = () => {
    setShowAddPlayer(true);
  };

  const addPlayer = (player) => {
    const maxId = players.length > 0 ? Math.max(...players.map(p => p.id)) : 22;
    const newId = maxId + 1;
    const newPlayer = { id: newId, ...player };
    setPlayers([...players, newPlayer]);
    setShowAddPlayer(false);
    Swal.fire("Added!", "New player has been added.", "success");
  };

  const handleCancelAdd = () => {
    setShowAddPlayer(false);
  };

  return (
    <div className="App">
      <h1>Soccer Team</h1>
      <button className="btn btn-success mb-3" onClick={handleAddPlayer}>
      Add Player
      </button>
      <PlayerList players={players} onDelete={handleDelete} onEdit={handleEdit} />
      {showAddPlayer && <AddPlayer show={showAddPlayer} handleClose={handleCancelAdd} addPlayer={addPlayer} />}
      {showEditPlayer && currentPlayer && <EditPlayer show={showEditPlayer} handleClose={handleCancelEdit} editPlayer={editPlayer} player={currentPlayer} />}
      {showDeletePlayer && playerToDelete !== null && <DeletePlayer show={showDeletePlayer} handleClose={handleCancelDelete} deletePlayer={deletePlayer} player={players.find(player => player.id === playerToDelete)} />}
    </div>
  );
}

export default App;

