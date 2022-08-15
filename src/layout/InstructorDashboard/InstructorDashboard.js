import React, {useState} from 'react';
import styles from './InstructorDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import SelectContainer from '../../UI/SelectContainer/SelectContainer';
import Options from '../../UI/Options/Options';
import OptionItem from '../../UI/Options/OptionItem';
import useSort from '../../hooks/useSort';
import useStatus from "../../hooks/useStatus";
import { courseProgramActions } from '../../store/courseProgram-slice';
import { sortCourse } from '../../Helper';

const Table = (props) => {
    return <ul className={`${styles.courseProgram_table}`}>
        {props.children}
    </ul>
}

const Header = (props) => {
    return <li className={`${styles.header}`}>
        {props.children}
    </li>
}

const Status = (props) => {
    if (props.type === "pending") {
        return <div className={`${styles.status_pending}`}>{props.children}</div>
    }
    if (props.type === "verified") {
        return <div className={`${styles.status_verified}`}>{props.children}</div>
    }
    if (props.type === "rejected") {
        return <div className={`${styles.status_rejected}`}>{props.children}</div>
    }
}

const Column = (props) => {
    return <div className={`${styles.column}`}>{props.children}</div>
}

const Row = (props) => {
    const status = props.status;
    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    const day = props.date.getDate();
    return <li className={`${styles.body}`}>
        <Column>{props.courseName}</Column>
        <Column>Ini course mantap!</Column>
        <Column>{props.enrolledStudent}</Column>
        <Column>{`${year}/${month}/${day}`}</Column>
        <Column>
            <Status type={props.status}>{status}</Status>
        </Column>
        <Column>
                <i class="fa-solid fa-ellipsis-vertical"></i>
        </Column>
    </li>
}

const Pagination = (props) => {
    return <div className={`${styles.pagination}`}>
        <div className={`${styles.prev}`} onClick={props.onPrevPage}>
            <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className={`${styles.next}`} onClick={props.onNextPage}>
            <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
    </div>
}

const InstructorDashboard = () => {
    const dispatch = useDispatch();
    const courseProgram = useSelector((state)=>state.course.courseProgram);
    const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("courseProgram", courseProgramActions);
    const sortedCourseProgram = sortCourse(courseProgram, selectedSortBy);
    const totalCourse = courseProgram.length;
    const courseProgramRow = sortedCourseProgram.map((course)=> <Row {...course}/>)

    // PAGINATION //
    const isShowRowOption = useSelector((state)=>state.courseProgram.isShowRowOption);
    const currentPage = useSelector((state)=>state.courseProgram.currentPage);
    const coursePerPage = useSelector((state)=>state.courseProgram.coursePerPage);
    const onClickedRowSelector = () => {
        dispatch(courseProgramActions.toggleRowOption());
    }
    const onClickedRowOption = (newCoursePerPage) => {
        dispatch(courseProgramActions.resetCurrentPage());
        dispatch(courseProgramActions.setCoursePerPage(newCoursePerPage));
    }

    const maxIdx = currentPage * parseInt(coursePerPage);
    const minIdx = maxIdx - parseInt(coursePerPage);
    const maximumPage = totalCourse % parseInt(coursePerPage) === 0 
        ? totalCourse / parseInt(coursePerPage)
        : Math.floor(totalCourse) / parseInt(coursePerPage) + 1;

    const nextPageHandler = () => {
        if (currentPage === maximumPage) return;
        dispatch(courseProgramActions.nextPage());
    }

    const prevPageHandler = () => {
        if (currentPage === 1) return;
        dispatch(courseProgramActions.prevPage());
    }
    // END OF PAGINATION //

    const sortSelector = <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
            <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>Enrolled</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>Date</OptionItem>
        </Options>
    </SelectContainer>

    // const statusSelector = <SelectContainer label="Status:" selected={statusFilter} onSelectClick={selectStatusClickHandler}>
    //     <Options active={isShowStatusOption}>
    //         <OptionItem onOptionClick={optionStatusClickHandler}>All</OptionItem>
    //         <OptionItem onOptionClick={optionStatusClickHandler}>Pending</OptionItem>
    //         <OptionItem onOptionClick={optionStatusClickHandler}>Verified</OptionItem>
    //         <OptionItem onOptionClick={optionStatusClickHandler}>Rejected</OptionItem>
    //     </Options>
    // </SelectContainer>

    const Tabel = <Table>
        <Header>
            <Column>Name</Column>
            <Column>Description</Column>
            <Column>Students</Column>
            <Column>Date</Column>
            <Column>Status</Column>
            <Column></Column>
        </Header>
        {courseProgramRow.slice(minIdx,maxIdx)}
    </Table>

    const coursePerPageSelector = <SelectContainer label={"Course per page:"} selected={coursePerPage} onSelectClick={onClickedRowSelector}>
        <Options active={isShowRowOption}>
            <OptionItem onOptionClick={onClickedRowOption}>5</OptionItem>
            <OptionItem onOptionClick={onClickedRowOption}>10</OptionItem>
            <OptionItem onOptionClick={onClickedRowOption}>15</OptionItem>
        </Options>
    </SelectContainer>

    let pageInformation;
    if (coursePerPage > totalCourse) {
        pageInformation = `${minIdx+1}-${coursePerPage > totalCourse ? totalCourse : coursePerPage} of ${courseProgram.length}`
    } else {
        pageInformation = `${minIdx+1}-${maxIdx} of ${courseProgram.length}`
    }

    const Content = <ContentContainer>
        <div className={`${styles.courseProgram_container}`}>
            <h1>Course Program</h1>
            <div className={`${styles.selector_container}`}>
                {sortSelector}
            </div>
            {Tabel}
            <div className={`${styles.actions}`}>
                {coursePerPageSelector}
                <div className={`${styles.page}`}>{pageInformation}</div>
                <Pagination onPrevPage={prevPageHandler} onNextPage={nextPageHandler}/>
            </div>
        </div>
    </ContentContainer>

    return (
        <>
            {Content}
        </>
    )
}

export default InstructorDashboard