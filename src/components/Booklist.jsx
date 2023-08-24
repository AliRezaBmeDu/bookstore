import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Booklist = ({ books }) => {
  const [bookList, setBookList] = useState(books);

  useEffect(() => {
    setBookList(books);
  }, [books]);

  const handleDeleteBook = (bookId) => {
    // Filter out the book with the given ID
    const updatedBooks = bookList.filter((book) => book.id !== bookId);
    setBookList(updatedBooks);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <span>
              <strong>Title:</strong>
              {' '}
              {book.title}
              ,
              {' '}
              <strong>Author:</strong>
              {' '}
              {book.author}
              ,
              {' '}
              <strong>Category:</strong>
              {' '}
              {book.category}
            </span>
            <button type="button" onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Booklist;
