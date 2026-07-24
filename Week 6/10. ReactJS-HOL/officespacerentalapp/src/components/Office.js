import React from 'react';

const Office = ({ office }) => {
  const { Name, Rent, Address } = office;

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '5px' }}>
      <h2>Name: {Name}</h2>
      <h3 style={{ color: Rent <= 60000 ? 'red' : 'green' }}>
        Rent: Rs. {Rent}
      </h3>
      <p>Address: {Address}</p>
    </div>
  );
};

export default Office;
