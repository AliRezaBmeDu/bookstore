import React, { useState } from 'react';
import primaryBooks from '../components/Book';
import Booklist from '../components/Booklist';
import Form from '../components/Form';

const Homepage = () => {
  const [books, setBooks] = useState(primaryBooks);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h1>Booklist</h1>
      <Booklist books={books} />
      <Form onAddBook={handleAddBook} />
    </div>
  );
};

export default Homepage;
