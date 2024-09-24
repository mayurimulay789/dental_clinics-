import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearAlert: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;