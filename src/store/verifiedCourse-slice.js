import {createSlice} from '@reduxjs/toolkit'

const verifiedCourseSlice = createSlice({
    name: 'verifiedCourse',
    initialState: {
        currentPage: 1,
        selectedRowNumber: "5",
        selectedSortBy: "Name",
        isShowRowOption: false,
        isShowSortOption: false,
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
        resetCurrentPage(state) {
            state.currentPage = 1;
        },
        nextPage(state) {
            state.currentPage = state.currentPage + 1;
        },
        prevPage(state) {
            state.currentPage = state.currentPage - 1;
        }
    }
}
)

export const verifiedCourseActions = verifiedCourseSlice.actions;
export default verifiedCourseSlice;