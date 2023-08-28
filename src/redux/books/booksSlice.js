import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books = state.books.append(newBook);
    },
    deleteBook: (state, action) => {
      const bookId = action.payload.id;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export default booksSlice.reducer;
