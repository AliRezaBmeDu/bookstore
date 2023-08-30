import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import { CircularProgressBar } from './Icons';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-book-container">
      <div className="single-book">
        <div className="book-info">
          <span className="book-category">{book.category}</span>
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author}</span>
        </div>
        <div className="btn-container">
          <button type="button">Comments</button>
          <span>|</span>
          <button type="button" onClick={() => dispatch(deleteBook(book))}>Remove</button>
          <span>|</span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="mid-section">
        <CircularProgressBar percentage={75} />
        <div>
          <span>75%</span>
          <p>Completed</p>
        </div>
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
