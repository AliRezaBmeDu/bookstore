import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import { CircularProgressBar } from './Icons';

const BookItem = ({ book }) => {
  const randomPercentage = Math.floor(Math.random() * 101);
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
        <CircularProgressBar percentage={randomPercentage} />
        <div>
          <span className="percentage-text">
            {randomPercentage}
            %
          </span>
          <p className="completed-text">Completed</p>
        </div>
      </div>
      <div className="end-section">
        <span className="current-chapter">Current Chapter</span>
        <span className="chapter-number">Chapter 1</span>
        <button type="button" className="update-btn">Update Progress</button>
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
