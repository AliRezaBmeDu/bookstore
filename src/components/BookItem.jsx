import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
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
      <button type="button" onClick={() => dispatch(deleteBook(book))}>Delete</button>
    </>
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
