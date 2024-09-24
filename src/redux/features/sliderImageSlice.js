// slices/sliderImagesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSliderImages = createAsyncThunk(
  'sliderImages/fetchSliderImages',
  async ({ page = 1, limit = 10 }) => {
    const response = await axios.get(`/api/slider-images?page=${page}&limit=${limit}`);
    return response.data;
  }
);

export const addSliderImage = createAsyncThunk(
  'sliderImages/addSliderImage',
  async (imageData) => {
    const formData = new FormData();
    formData.append('image', imageData.file);
    formData.append('name', imageData.name);
    const response = await axios.post('/api/slider-images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }
);
export const deleteSliderImage = createAsyncThunk(
    'sliderImages/deleteSliderImage',
    async (imageId) => {
      await axios.delete(`/api/slider-images/${imageId}`)
      return imageId
    }
  )
// ... (keep other async thunks as they are)

const sliderImagesSlice = createSlice({
  name: 'sliderImages',
  initialState: {
    images: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
    totalImages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSliderImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload.images;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalImages = action.payload.totalImages;
      })
      .addCase(fetchSliderImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addSliderImage.fulfilled, (state, action) => {
        state.images.push(action.payload);
        state.totalImages += 1;
      })
      .addCase(deleteSliderImage.fulfilled, (state, action) => {
        state.images = state.images.filter((image) => image._id !== action.payload);
        state.totalImages -= 1;
      });
  },
});

export default sliderImagesSlice.reducer;