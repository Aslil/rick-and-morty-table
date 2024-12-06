import React from "react";

const Details = ({ character }) => {
  if (!character) return null;

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}>
      <h2>{character.name}</h2>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "200px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Details;
