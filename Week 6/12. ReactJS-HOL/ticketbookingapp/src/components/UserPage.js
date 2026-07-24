import React, { useState } from 'react';
import LogoutButton from './LogoutButton';
import FlightDetails from './FlightDetails';
import TicketBooking from './TicketBooking';

function UserPage({ onLogout }) {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleBookClick = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="page-container">
      <h2>Welcome Back!</h2>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
        <LogoutButton onClick={onLogout} />
      </div>
      
      <FlightDetails showBookingOption={true} onBookClick={handleBookClick} />
      
      {/* Conditional rendering for TicketBooking */}
      {selectedFlight ? (
        <TicketBooking flight={selectedFlight} />
      ) : (
        <div className="booking-section">
          <p>Please select a flight from the list above to proceed with booking.</p>
        </div>
      )}
    </div>
  );
}

export default UserPage;
