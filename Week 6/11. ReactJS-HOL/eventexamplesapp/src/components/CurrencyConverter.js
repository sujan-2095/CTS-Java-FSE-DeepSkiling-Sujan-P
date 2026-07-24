import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  
  const CONVERSION_RATE = 0.0105; // INR to Euro conversion rate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const converted = parseFloat(amount) * CONVERSION_RATE;
      alert(`Converting to Euro Amount is ${converted.toFixed(2)}`);
    } else {
      alert(`Conversion for ${currency} is not configured.`);
    }
  };

  return (
    <div className="currency-section">
      <h2>Currency Converter section</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Currency: </label>
          <input 
            type="text" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
