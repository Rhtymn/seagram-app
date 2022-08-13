import {configureStore} from '@reduxjs/toolkit';
import uiStudentSlice from './ui-student-slice';
import uiInstructorSlice from './ui-instructor-slice';
import courseSlice from './course-slice';
import enrolledCourseSlice from './enrolledCourse-slice';
import verifiedCourseSlice from './verifiedCourse-slice';
import courseProgramSlice from './courseProgram-slice';

const store = configureStore({
    reducer: {
        uiStudent: uiStudentSlice.reducer,
        uiInstructor: uiInstructorSlice.reducer,
        course: courseSlice.reducer,
        enrolledCourse: enrolledCourseSlice.reducer,
        verifiedCourse: verifiedCourseSlice.reducer,
        courseProgram: courseProgramSlice.reducer,
    }});

export default store;