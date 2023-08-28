import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    isLoading: true
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook = action.payload;
            state.books = state.books.append(newBook);
        },
    },
});

export default booksSlice.reducer