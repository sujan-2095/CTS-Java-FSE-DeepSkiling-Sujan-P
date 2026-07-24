import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    alert("Hello! Member1");
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-section">
      <h2>Counter value: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
