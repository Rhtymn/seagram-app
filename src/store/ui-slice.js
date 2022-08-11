import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isShowSidebar:false, 
        activeSideNav: "dashboard",
        activeCourseDetails: {},
        isShowCourseDetails: false,
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
        setActiveCourseDetails(state,actions){
            state.activeCourseDetails = actions.payload;
            console.log(state.activeCourseDetails);
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;