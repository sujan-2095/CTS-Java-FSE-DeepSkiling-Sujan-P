import React from 'react';

const indianTeam = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Yuvraj",
  "Raina"
];

export const IndianPlayers = () => {
  // Using ES6 array destructuring
  const [first, second, third, fourth, fifth, sixth] = indianTeam;

  return (
    <div>
      <h2>Indian Players</h2>
      <div>
        <h3>Odd Players</h3>
        <ul>
          <li>First: {first}</li>
          <li>Third: {third}</li>
          <li>Fifth: {fifth}</li>
        </ul>
      </div>
      <div>
        <h3>Even Players</h3>
        <ul>
          <li>Second: {second}</li>
          <li>Fourth: {fourth}</li>
          <li>Sixth: {sixth}</li>
        </ul>
      </div>
    </div>
  );
};
