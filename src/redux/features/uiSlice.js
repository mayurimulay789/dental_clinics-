import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentImageIndex: 0,
  quotes: [
    "Keep your teeth healthy",
    "Your smile is our passion",
    "Quality dental care for your family",
  ],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
  },
});

export const { setImageIndex, setQuotes } = uiSlice.actions;

export default uiSlice.reducer;
