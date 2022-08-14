import React from 'react';
import styles from './InstructorDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import SelectContainer from '../../UI/SelectContainer/SelectContainer';
import Options from '../../UI/Options/Options';
import OptionItem from '../../UI/Options/OptionItem';
import useSort from '../../hooks/useSort';
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
    const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("courseProgram", courseProgramActions);
    const sortedCourseProgram = sortCourse(courseProgram, selectedSortBy);
    const courseProgramList = sortedCourseProgram.map((course)=><Row {...course}></Row>)

    const Content = <ContentContainer>
        <div className={`${styles.courseProgram_container}`}>
            <h1>Course Program</h1>
            <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
                <Options active={isShowSortOption}>
                    <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
                    <OptionItem onOptionClick={optionSortClickHandler}>Enrolled</OptionItem>
                    <OptionItem onOptionClick={optionSortClickHandler}>Date</OptionItem>
                </Options>
            </SelectContainer>
            <Table>
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
        </div>
    </ContentContainer>

    return (
        <>
            {Content}
        </>
    )
}

export default InstructorDashboard