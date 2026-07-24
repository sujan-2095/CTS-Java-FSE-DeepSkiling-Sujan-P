import React from 'react';
import { books } from '../data/books';

const BookDetails = () => {
  // Using ternary operator for conditional rendering
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books && books.length > 0 ? (
        books.map(book => (
          <div key={book.id} className="card">
            <h3>{book.bname}</h3>
            <p>Price: ${book.price}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookDetails;
