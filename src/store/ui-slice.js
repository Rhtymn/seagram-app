import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isShowSidebar:false},
    reducers: {
        toggleSidebar(state){
            state.isShowSidebar = !state.isShowSidebar;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;