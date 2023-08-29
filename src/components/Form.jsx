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
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="author">
        Author:
        <input
          type="text"
          id="author"
          className="author-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label htmlFor="category">
        Category:
        <input
          type="text"
          id="category"
          className="category-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </form>
  );
};

export default Form;
