import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Ticket Booking System</h1>
      </header>
      <main className="App-main">
        {/* Conditional rendering based on login state */}
        {isLoggedIn ? (
          <UserPage onLogout={handleLogout} />
        ) : (
          <GuestPage onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}

export default App;
