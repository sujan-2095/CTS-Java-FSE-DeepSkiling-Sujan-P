import React from 'react';
import { ListofPlayers } from './components/ListofPlayers';
import { ScoreBelow70 } from './components/ScoreBelow70';
import { IndianPlayers } from './components/IndianPlayers';
import { MergePlayers } from './components/MergePlayers';

function App() {
  // Flag variable to toggle between different views
  let flag = true; // Change this to false to see the other components

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cognizant React Hands-on Lab: Cricket App</h1>
      <hr />
      
      {flag ? (
        <div>
          <ListofPlayers />
          <hr />
          <ScoreBelow70 />
        </div>
      ) : (
        <div>
          <IndianPlayers />
          <hr />
          <MergePlayers />
        </div>
      )}
    </div>
  );
}

export default App;
