import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => (
  <>
    <span>
      <strong>Title:</strong>
      {book.title}
      ,
      <strong>Author:</strong>
      {book.author}
      ,
      <strong>Category:</strong>
      {book.category}
    </span>
    <button type="button" onClick={() => deleteBook(book.id)}>Delete</button>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
