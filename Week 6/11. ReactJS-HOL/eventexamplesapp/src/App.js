import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';
import EventButtons from './components/EventButtons';

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <EventButtons />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
