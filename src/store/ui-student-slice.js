import { createSlice } from "@reduxjs/toolkit";

const uiStudentSlice = createSlice({
    name: 'uiStudent',
    initialState: {
        activeSideNav: "dashboard",
        activeCourseDetails: {},
        isShowSidebar:false, 
        isShowCourseDetails: false, 
        isShowQuiz: false,
        isShowQuizNavigation: false,
    },
    reducers: {
        toggleSidebar(state){
            state.isShowSidebar = !state.isShowSidebar;
        },
        toggleActiveSideNav(state, actions){
            state.activeSideNav = actions.payload;
        },
        toggleCourseDetails(state){
            state.isShowCourseDetails = !state.isShowCourseDetails;
        },
        toggleQuizNavigation(state){
            state.isShowQuizNavigation = !state.isShowQuizNavigation;
        },
        setActiveCourseDetails(state,actions){
            state.activeCourseDetails = actions.payload;
            console.log(state.activeCourseDetails);
        },
    }
})

export const uiStudentActions = uiStudentSlice.actions;
export default uiStudentSlice;