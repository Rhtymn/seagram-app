import { createSlice } from "@reduxjs/toolkit";

const uiInstructorSlice = createSlice({
    name: 'uiInstructor',
    initialState: {
        activeSideNav: "dashboard",
        isShowSidebar:false, 
        // activeCourseDetails: {},
        // isShowCourseDetails: false, 
        // isShowQuiz: false,
        // isShowQuizNavigation: false,
    },
    reducers: {
        toggleSidebar(state){
            state.isShowSidebar = !state.isShowSidebar;
        },
        toggleActiveSideNav(state, actions){
            state.activeSideNav = actions.payload;
        },
        // toggleCourseDetails(state){
        //     state.isShowCourseDetails = !state.isShowCourseDetails;
        // },
        // toggleQuizNavigation(state){
        //     state.isShowQuizNavigation = !state.isShowQuizNavigation;
        // },
        // setActiveCourseDetails(state,actions){
        //     state.activeCourseDetails = actions.payload;
        //     console.log(state.activeCourseDetails);
        // },
    }
})

export const uiInstructorActions = uiInstructorSlice.actions;
export default uiInstructorSlice;