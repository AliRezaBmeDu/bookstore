import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi'
const appId = 'FfsxRXd6weDBOx32orzJ'

const initialState = {
  books: [],
  isLoading: true,
};

export const getBooks = createAsyncThunk('books/getBookItems', async () => {
  try{
    const response = await axios(`${baseUrl}/apps/${appId}/books`);
    console.log(response.data)
  }catch(err){
    console.error('Error fetching data');
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books = [...state.books, newBook];
    },
    deleteBook: (state, action) => {
      const bookId = action.payload.item_id;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
