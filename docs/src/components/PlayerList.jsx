import React from "react";

const PlayerList = ({ players, onDelete, onEdit }) => {
    // Debug log to confirm what data is passed in
    console.log("Rendering PlayerList with players:", players);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
              <td>
                <button
                  className="btn btn-primary btn-edit"
                  onClick={() => onEdit(player.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-delete"
                  onClick={() => onDelete(player.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;

