import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    isLoading: true
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        
    },
});

export default booksSlice.reducer