import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Booklist = () => {
  // const dispatch = useDispatch();
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

// Booklist.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default Booklist;
