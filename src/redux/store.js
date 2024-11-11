import { configureStore } from "@reduxjs/toolkit";

// Importing Reducers
import userReducer from "./reducers/userReducer";
import adminReducer from "./reducers/adminReducer";
import sliderReducer from "./reducers/sliderReducer";

import shortsReducer from "./reducers/shortsReducer";

// PRODUCTION
export const server = "https://dental-clinicbackend.onrender.com/api/v1";

// DEVELOPMENT
// export const server = "http://localhost:5000/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    slider: sliderReducer,
   
    shorts: shortsReducer,
  },
});

export default store;
