import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (title && author && category) {
      // Calculate the id for the new book
      const curDate = new Date().getTime();
      const newId = curDate.toString();

      // Create the new book object
      const newBook = {
        item_id: newId,
        title,
        author,
        category,
      };

      // Dispatch the AddBook function to add the new book
      dispatch(addBook(newBook));

      // Clear the input fields
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <form>
      <hr />
      <h2 className="add-book-heading">Add New Book</h2>
      <div className="form-components">
        <label htmlFor="title">
          <input
            type="text"
            id="title"
            className="title-input"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          <input
            type="text"
            id="author"
            className="author-input"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="category" className="category-input">
          <select
            className="category-selected"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Category</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Comics">Comics</option>
            <option value="Classic">Classic</option>
            <option value="Thriller">Thriller</option>
            <option value="Thriller">Romantic</option>
          </select>
        </label>
        <button type="button" className="add-btn" onClick={handleAddClick}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
