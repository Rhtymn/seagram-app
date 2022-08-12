import {createSlice} from '@reduxjs/toolkit'

const verifiedCourseSlice = createSlice({
    name: 'verifiedCourse',
    initialState: {
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
        }
    }
})

export const verifiedCourseActions = verifiedCourseSlice.actions;
export default verifiedCourseSlice;