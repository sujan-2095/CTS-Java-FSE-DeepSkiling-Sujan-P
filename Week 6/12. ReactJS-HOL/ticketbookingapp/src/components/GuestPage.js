import React from 'react';
import LoginButton from './LoginButton';
import FlightDetails from './FlightDetails';

function GuestPage({ onLogin }) {
  // Using an Element Variable to hold the header message
  const guestHeaderMessage = <h2>Please sign up.</h2>;

  return (
    <div className="page-container">
      {guestHeaderMessage}
      <p style={{ color: '#555' }}>Log in to access booking features and reserve your flights.</p>
      
      <LoginButton onClick={onLogin} />
      
      <div style={{ width: '100%', margin: '20px 0', borderBottom: '1px solid #ddd' }}></div>
      
      <FlightDetails showBookingOption={false} />
    </div>
  );
}

export default GuestPage;
