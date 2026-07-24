import React from 'react';

const t20Players = ["Hardik", "Bhuvi", "Bumrah"];
const ranjiPlayers = ["Saurabh", "Prithvi", "Ruturaj"];

export const MergePlayers = () => {
  // Using ES6 spread operator to merge two arrays
  const mergedPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div>
      <h2>List of Merged Indian Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};
