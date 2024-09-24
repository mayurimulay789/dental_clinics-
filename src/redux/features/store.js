import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "../features/alertSlice";
import uiReducer from '../features/uiSlice';
import servicesReducer from '../features/serviceSlice';
import serviceBlocksReducer from './serviceBlockSlice';
import authReducer from '../features/authSlice';
import alertReducer from '../features/alertsSlice';
import sliderImagesReducer from '../features/sliderImageSlice';
export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        ui: uiReducer,
        services: servicesReducer,
        serviceBlocks: serviceBlocksReducer,
        auth: authReducer,
        alert: alertReducer,
        sliderImages: sliderImagesReducer,
    },
})