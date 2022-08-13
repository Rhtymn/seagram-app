import {createSlice} from '@reduxjs/toolkit'

const enrolledCourseSlice = createSlice({
    name: 'enrolledCourse',
    initialState: {
        selectedRowNumber: "5",
        selectedSortBy: "Name",
        isShowRowOption: false,
        isShowSortOption: false,
        activePage:1,
    },
    reducers: {
        toggleRowOption(state){
            state.isShowRowOption = !state.isShowRowOption;
        },
        toggleSortOption(state){
            state.isShowSortOption = !state.isShowSortOption;
        },
        setSelectedRowNumber(state,actions){
            state.selectedRowNumber = actions.payload;
        },
        setSelectedSortBy(state,actions){
            state.selectedSortBy = actions.payload;
        },
        setActivePage(state,actions){
            state.activePage = actions.payload;
        }
    }
})

export const enrolledCourseActions = enrolledCourseSlice.actions;
export default enrolledCourseSlice;