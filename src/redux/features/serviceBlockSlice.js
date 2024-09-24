// redux/serviceBlocksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blocks: [
    {
      title: 'Get Website and App Designs',
      description: 'Our skilled designers create stunning, user-friendly websites and apps tailored to your brand. From concept to launch, we ensure a seamless design process.',
      image: '/placeholder.svg?height=400&width=400',
      alt: 'Person working on website design'
    },
    {
      title: 'We love developing your Designs',
      description: 'Our expert developers bring your designs to life with clean, efficient code. We ensure your website or app is responsive, fast, and built to last.',
      image: '/placeholder.svg?height=400&width=400',
      alt: 'Person developing designs'
    },
    {
      title: 'Keep your Data safe with our team',
      description: 'Security is our top priority. Our team implements robust measures to protect your data, ensuring your peace of mind and your users\' trust.',
      image: '/placeholder.svg?height=400&width=400',
      alt: 'Data security illustration'
    }
  ]
};

const serviceBlocksSlice = createSlice({
  name: 'serviceBlocks',
  initialState,
  reducers: {
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    }
  }
});

export const { setBlocks } = serviceBlocksSlice.actions;
export default serviceBlocksSlice.reducer;
