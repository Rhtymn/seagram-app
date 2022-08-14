import {useDispatch, useSelector} from "react-redux"

const useStatus = (courseSlice, action) => {
    const dispatch = useDispatch();
    const selectedStatus = useSelector((state)=>state[courseSlice].selectedStatus);
    const isShowStatusOption = useSelector((state)=>state[courseSlice].isShowStatusOption);
    const selectStatusClickHandler = () => {
        dispatch(action.toggleStatusOption());
    }
    const optionStatusClickHandler = (status) => {
        dispatch(action.setSelectedStatus(status));
    }
    return {selectedStatus, isShowStatusOption, selectStatusClickHandler, optionStatusClickHandler};
}

export default useStatus;