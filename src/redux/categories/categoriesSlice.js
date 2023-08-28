import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    isLoading: true
}

const categories = createSlice({
    name: 'books',
    initialState,
    reducers: {
        checkStatus: () => {
            return "Under construction"
        }
    },
});

export default categories.reducer