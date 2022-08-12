import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        activeSideNav: "dashboard",
        activeCourseDetails: {},
        selectedRowNumber: "5",
        isShowSidebar:false, 
        isShowCourseDetails: false, 
        isShowQuiz: false,
        isShowQuizNavigation: false,
        isShowRowOption: false,
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
        toggleRowOption(state){
            state.isShowRowOption = !state.isShowRowOption;
        },
        setActiveCourseDetails(state,actions){
            state.activeCourseDetails = actions.payload;
            console.log(state.activeCourseDetails);
        },
        setSelectedRowNumber(state,actions){
            state.selectedRowNumber = actions.payload;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;