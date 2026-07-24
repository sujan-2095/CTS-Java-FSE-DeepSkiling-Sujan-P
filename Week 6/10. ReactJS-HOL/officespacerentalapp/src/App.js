import React from 'react';
import './App.css';
import officeImage from './assets/office-space.png';
import Office from './components/Office';

const officeSpaces = [
  {
    id: 1,
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai',
  },
  {
    id: 2,
    Name: 'Regus',
    Rent: 70000,
    Address: 'Bangalore',
  },
  {
    id: 3,
    Name: 'Co-wrks',
    Rent: 80000,
    Address: 'Pune',
  },
  {
    id: 4,
    Name: 'Awfis',
    Rent: 40000,
    Address: 'Mumbai',
  }
];

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space, at Affordable Range</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <img 
          src={officeImage} 
          alt="Office Space" 
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {officeSpaces.map((office) => (
          <div key={office.id} style={{ width: '100%', maxWidth: '600px', textAlign: 'left' }}>
            <Office office={office} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
