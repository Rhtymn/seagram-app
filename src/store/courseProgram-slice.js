import {createSlice} from '@reduxjs/toolkit'

const courseProgramSlice = createSlice({
    name: 'enrolledCourse',
    initialState: {
        selectedRowNumber: "5",
        selectedSortBy: "Name",
        selectedStatus: "Pending",
        isShowRowOption: false,
        isShowSortOption: false,
        isShowStatusOption: false,
        activePage:1,
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
        setSelectedRowNumber(state,actions){
            state.selectedRowNumber = actions.payload;
        },
        setSelectedSortBy(state,actions){
            state.selectedSortBy = actions.payload;
        },
        setSelectedStatus(state,actions) {
            state.selectedStatus = actions.payload;
        },
        setActivePage(state,actions){
            state.activePage = actions.payload;
        }
    }
})

export const courseProgramActions = courseProgramSlice.actions;
export default courseProgramSlice;