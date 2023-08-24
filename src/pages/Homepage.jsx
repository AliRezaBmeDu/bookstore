import React, { useState } from 'react';
import primaryBooks from '../components/BookDB';
import Booklist from '../components/Booklist';
import Form from '../components/Form';

const Homepage = () => {
  const [books, setBooks] = useState(primaryBooks);

  const handleAddBook = (newBook) => {
    // Use the functional form of setBooks
    setBooks((prevBooks) => [...prevBooks, newBook]);
    console.log('Books:', books);
  };

  return (
    <div>
      <Booklist books={books} />
      <Form onAddBook={handleAddBook} />
    </div>
  );
};

export default Homepage;
