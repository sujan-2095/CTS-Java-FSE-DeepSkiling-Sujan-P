import React from 'react';

function FlightDetails({ showBookingOption, onBookClick }) {
  const flights = [
    {
      id: 1,
      flightNumber: 'AI-2024',
      airline: 'Air India',
      source: 'Chennai',
      destination: 'Singapore',
      departureTime: '10:00 AM',
      arrivalTime: '04:30 PM',
      price: '₹15,000'
    },
    {
      id: 2,
      flightNumber: 'IN-101',
      airline: 'IndiGo',
      source: 'Bangalore',
      destination: 'Delhi',
      departureTime: '06:00 AM',
      arrivalTime: '08:45 AM',
      price: '₹5,500'
    },
    {
      id: 3,
      flightNumber: 'SG-555',
      airline: 'SpiceJet',
      source: 'Mumbai',
      destination: 'Dubai',
      departureTime: '09:00 PM',
      arrivalTime: '11:15 PM',
      price: '₹12,000'
    },
    {
      id: 4,
      flightNumber: 'UK-999',
      airline: 'Vistara',
      source: 'Delhi',
      destination: 'London',
      departureTime: '02:00 PM',
      arrivalTime: '06:30 PM',
      price: '₹45,000'
    }
  ];

  return (
    <div className="flight-details-container">
      <h2>Available Flights</h2>
      <div className="flight-list">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p><strong>Flight No:</strong> {flight.flightNumber}</p>
            <p><strong>Route:</strong> {flight.source} &rarr; {flight.destination}</p>
            <p><strong>Departure:</strong> {flight.departureTime}</p>
            <p><strong>Arrival:</strong> {flight.arrivalTime}</p>
            <p><strong>Price:</strong> {flight.price}</p>
            
            {/* Element variable equivalent (conditional inline) */}
            {showBookingOption && (
              <button 
                className="btn btn-book" 
                onClick={() => onBookClick(flight)}
                style={{ marginTop: '15px', width: '100%' }}
              >
                Book Ticket
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightDetails;
