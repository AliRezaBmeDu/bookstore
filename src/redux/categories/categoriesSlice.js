import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
