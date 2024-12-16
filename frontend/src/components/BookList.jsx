import React, { useState } from 'react';
import BookCard from './BookCard';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby' },
    { id: 2, title: '1984' },
    { id: 3, title: 'To Kill a Mockingbird' },
  ]);

  const handleViewDetails = (book) => {
    alert(`Viewing details for: ${book.title}`);
  };

  const handleEdit = (book) => {
    alert(`Editing book: ${book.title}`);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onViewDetails={handleViewDetails}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default BookList;
