import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'FfsxRXd6weDBOx32orzJ';

const initialState = {
  books: [],
  isLoading: true,
};

const makeProperList = (booksObject) => {
  const result = [];
  Object.keys(booksObject).forEach((itemId) => {
    const book = booksObject[itemId][0];
    book.item_id = itemId;
    result.push(book);
  });
  return result;
};

export const getBookItems = createAsyncThunk('books/getBookItems', async () => {
  try {
    const response = await axios(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (err) {
    console.error('Error fetching data');
    throw err;
  }
});

const postBookItem = async (newBook) => {
  try {
    await axios.post(`${baseUrl}/apps/${appId}/books`, newBook);
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

const deleteBookItem = async (bookId) => {
  try {
    await axios.delete(`${baseUrl}/apps/${appId}/books/${bookId}`);
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books = [...state.books, newBook];
      postBookItem(newBook);
    },
    deleteBook: (state, action) => {
      const bookId = action.payload.item_id;
      state.books = state.books.filter((item) => item.item_id !== bookId);
      deleteBookItem(bookId);
    },
  },
  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookItems.fulfilled]: (state, action) => {
      state.books = makeProperList(action.payload);
      state.isLoading = false;
    },
    [getBookItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
