import React from 'react';
import { players } from './ListofPlayers';

export const ScoreBelow70 = () => {
  // Using ES6 filter and arrow functions
  const playersBelow70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>Players with scores less than 70</h2>
      {playersBelow70.map((player, index) => (
        <div key={index}>
          Mr. {player.name} <span>{player.score}</span>
        </div>
      ))}
    </div>
  );
};
