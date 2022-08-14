import React from 'react';
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


const InstructorDashboard = () => {
    const courseProgram = useSelector((state)=>state.course.courseProgram);
    const status = useSelector((state)=>state.courseProgram.selectedStatus);
    const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("courseProgram", courseProgramActions);
    const {selectedStatus, isShowStatusOption, selectStatusClickHandler, optionStatusClickHandler} = useStatus("courseProgram", courseProgramActions);
    const sortedCourseProgram = sortCourse(courseProgram, selectedSortBy);

    let courseProgramList;
    if (status !== "All") {
        courseProgramList = sortedCourseProgram.filter((course)=>course.status === status.toLowerCase()).map((course)=><Row {...course}/>);
    } else {
        courseProgramList = sortedCourseProgram.map((course)=><Row {...course}></Row>)
    }

    const sortSelector = <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
            <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>Enrolled</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>Date</OptionItem>
        </Options>
    </SelectContainer>

    const statusSelector = <SelectContainer label="Status:" selected={selectedStatus} onSelectClick={selectStatusClickHandler}>
        <Options active={isShowStatusOption}>
            <OptionItem onOptionClick={optionStatusClickHandler}>All</OptionItem>
            <OptionItem onOptionClick={optionStatusClickHandler}>Pending</OptionItem>
            <OptionItem onOptionClick={optionStatusClickHandler}>Verified</OptionItem>
            <OptionItem onOptionClick={optionStatusClickHandler}>Rejected</OptionItem>
        </Options>
    </SelectContainer>

    const Tabel = <Table>
        <Header>
            <Column>Name</Column>
            <Column>Description</Column>
            <Column>Students</Column>
            <Column>Date</Column>
            <Column>Status</Column>
            <Column></Column>
        </Header>
        {courseProgramList}
    </Table>

    const Content = <ContentContainer>
        <div className={`${styles.courseProgram_container}`}>
            <h1>Course Program</h1>
            <div className={`${styles.selector_container}`}>
                {sortSelector}
                {statusSelector}
            </div>
            {Tabel}
        </div>
    </ContentContainer>

    return (
        <>
            {Content}
        </>
    )
}

export default InstructorDashboard