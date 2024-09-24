// src/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  // Add other UI-related state here
};

const uisSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    // Add other UI-related actions here
  },
});

export const { toggleTheme } = uisSlice.actions;

export default uisSlice.reducer;