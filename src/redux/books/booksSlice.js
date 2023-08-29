import { createSlice } from '@reduxjs/toolkit';
import primaryBooks from '../../components/BookDB';

const initialState = {
  books: primaryBooks,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      console.log(newBook);
      console.log('current state', state.books);
      state.books = [...state.books, newBook];
      console.log('state after add', state.books);
      // state.books = state.books.append(newBook);
    },
    deleteBook: (state, action) => {
      const bookId = action.payload.item_id;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
