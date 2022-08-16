import {useDispatch, useSelector} from "react-redux"

const useSort = (courseSlice, action) => {
    const dispatch = useDispatch();
    const selectedSortBy = useSelector((state)=>state[courseSlice].selectedSortBy);
    const isShowSortOption = useSelector((state)=>state[courseSlice].isShowSortOption);
    const selectSortClickHandler = () => {
        dispatch(action.toggleSortOption());
    }
    const optionSortClickHandler = (sortBy) => {
        dispatch(action.setSelectedSortBy(sortBy));
    }
    return {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler};
}

export default useSort;