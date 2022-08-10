import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import courseSlice from './course-slice';

const store = configureStore({reducer: {ui: uiSlice.reducer, course: courseSlice.reducer}});

export default store;