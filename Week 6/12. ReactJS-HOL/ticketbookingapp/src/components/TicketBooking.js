import React, { useState } from 'react';

function TicketBooking({ flight }) {
  const [passengerName, setPassengerName] = useState('');
  const [tickets, setTickets] = useState(1);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (passengerName.trim() === '') {
      alert('Please enter the passenger name.');
      return;
    }
    setIsBooked(true);
  };

  if (!flight) {
    return (
      <div className="booking-section">
        <p>Please select a flight to book.</p>
      </div>
    );
  }

  // Conditional Rendering with if...else
  if (isBooked) {
    return (
      <div className="booking-section">
        <h3 style={{color: '#28a745'}}>Booking Confirmed! ✅</h3>
        <p>Thank you, <strong>{passengerName}</strong>.</p>
        <p>Your {tickets} ticket(s) for <strong>{flight.airline} ({flight.flightNumber})</strong> from {flight.source} to {flight.destination} have been successfully booked.</p>
        <button className="btn" onClick={() => setIsBooked(false)}>Book Another</button>
      </div>
    );
  } else {
    return (
      <div className="booking-section">
        <h3>Book Tickets - {flight.flightNumber}</h3>
        <form className="booking-form" onSubmit={handleBooking}>
          <div>
            <label>Passenger Name: </label>
            <input 
              type="text" 
              value={passengerName} 
              onChange={(e) => setPassengerName(e.target.value)} 
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <label>Number of Tickets: </label>
            <input 
              type="number" 
              min="1" 
              max="5" 
              value={tickets} 
              onChange={(e) => setTickets(e.target.value)} 
            />
          </div>
          <p><strong>Total Price:</strong> {flight.price} x {tickets}</p>
          <button type="submit" className="btn btn-book" style={{width: '100%'}}>Confirm Booking</button>
        </form>
      </div>
    );
  }
}

export default TicketBooking;
