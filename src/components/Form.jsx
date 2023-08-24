import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddClick = () => {
    if (title && author && category) {
      // Calculate the id for the new book
      const newId = new Date().getTime();

      // Create the new book object
      const newBook = {
        id: newId,
        title,
        author,
        category,
      };

      // Call the parent component's onAddBook function to add the new book
      onAddBook(newBook);

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

Form.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default Form;
