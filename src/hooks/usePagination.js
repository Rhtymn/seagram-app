import {useSelector, useDispatch} from 'react-redux'

const usePagination = (courseSlice, action, courseData) => {
    const dispatch = useDispatch();
    const selectedRowNumber = useSelector((state)=>state[courseSlice].selectedRowNumber);
    const isShowRowOption = useSelector((state)=>state[courseSlice].isShowRowOption);
    const activePage = useSelector((state)=>state.courseProgram.activePage);
    const totalCourse = courseData.length;
    const maxPage = Math.ceil(totalCourse/ parseInt(selectedRowNumber)); 
    const selectRowClickHandler = () => {
        dispatch(action.toggleRowOption());
    }
    const optionRowClickHandler = (rowNumber) => {
        dispatch(action.setSelectedRowNumber(rowNumber));
    }
    const nextPageHandler = () => {
        if (activePage + 1 > maxPage) return;
        dispatch(action.setActivePage(activePage + 1));
    } 
    const prevPageHandler = () => {
        if (activePage - 1 === 0) return;
        dispatch(action.setActivePage(activePage - 1));
    }

    return {
        activePage,
        totalCourse,
        maxPage,
        selectedRowNumber, 
        isShowRowOption, 
        selectRowClickHandler,
        optionRowClickHandler,
        nextPageHandler,
        prevPageHandler
    }
}

export default usePagination;