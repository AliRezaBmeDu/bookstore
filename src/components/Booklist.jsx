import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Booklist = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
