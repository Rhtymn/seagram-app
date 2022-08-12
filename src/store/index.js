import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import courseSlice from './course-slice';
import enrolledCourseSlice from './enrolledCourse-slice';
import verifiedCourseSlice from './verifiedCourse-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer, 
        course: courseSlice.reducer,
        enrolledCourse: enrolledCourseSlice.reducer,
        verifiedCourse: verifiedCourseSlice.reducer,
    }});

export default store;