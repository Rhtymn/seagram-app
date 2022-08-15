import {createSlice} from '@reduxjs/toolkit'

const courseProgramSlice = createSlice({
    name: 'courseProgram',
    initialState: {
        currentPage: 1,
        coursePerPage: "5",
        selectedSortBy: "Name",
        selectedStatus: "All",
        isShowRowOption: false,
        isShowSortOption: false,
        isShowStatusOption: false,
    },
    reducers: {
        toggleRowOption(state){
            state.isShowRowOption = !state.isShowRowOption;
        },
        toggleSortOption(state){
            state.isShowSortOption = !state.isShowSortOption;
        },
        toggleStatusOption(state){
            state.isShowStatusOption = !state.isShowStatusOption;
        },
        setCoursePerPage(state,actions){
            state.coursePerPage = actions.payload;
        },
        setSelectedSortBy(state,actions){
            state.selectedSortBy = actions.payload;
        },
        setSelectedStatus(state,actions) {
            state.selectedStatus = actions.payload;
        },
        resetCurrentPage(state) {
            state.currentPage = 1;
        },
        nextPage(state){
            state.currentPage = state.currentPage + 1;
        },
        prevPage(state){
            state.currentPage = state.currentPage - 1;
        },
    }
})

export const courseProgramActions = courseProgramSlice.actions;
export default courseProgramSlice;