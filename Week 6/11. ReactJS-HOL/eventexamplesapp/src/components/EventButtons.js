import React from 'react';

const EventButtons = () => {
  const handleWelcome = (message) => {
    alert(message);
  };

  const handleClickMe = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="event-buttons-section">
      <button onClick={() => handleWelcome("Welcome")}>Say Welcome</button>
      <button onClick={handleClickMe}>Click on me</button>
    </div>
  );
};

export default EventButtons;
