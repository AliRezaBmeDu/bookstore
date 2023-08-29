import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-book">
      <div className="book-info">
        <span className="book-category">{book.category}</span>
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
      </div>
      <div className="btn-container">
        <button type="button">Comments</button>
        <button type="button" onClick={() => dispatch(deleteBook(book))}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
