import React from 'react';
import styles from './InstructorDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import { useSelector } from 'react-redux/es/exports';

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

// const Row = (props) => {
//     return <li className={`${styles.body}`}>
//         {props.children}
//     </li>
// }

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
    return <li className={`${styles.body}`}>
        <Column>{props.courseName}</Column>
        <Column>Ini course mantap!</Column>
        <Column>{props.enrolledStudent}</Column>
        <Column>{props.date}</Column>
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
    const courseProgramList = courseProgram.map((course)=><Row {...course}></Row>)

    const Content = <ContentContainer>
        <div className={`${styles.courseProgram_container}`}>
            <h1>Course Program</h1>
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
                {/* <Row>
                    <Column>Course A</Column>
                    <Column>Ini Course A</Column>
                    <Column>10</Column>
                    <Column>2022/08/14</Column>
                    <Column><Status type="pending">Pending</Status></Column>
                    <Column></Column>
                </Row>
                <Row>
                    <Column>Course A</Column>
                    <Column>Ini Course A</Column>
                    <Column>10</Column>
                    <Column>2022/08/14</Column>
                    <Column><Status type="verified">Verified</Status></Column>
                    <Column></Column>
                </Row>
                <Row>
                    <Column>Course A</Column>
                    <Column>Ini Course A</Column>
                    <Column>10</Column>
                    <Column>2022/08/14</Column>
                    <Column><Status type="rejected">Rejected</Status></Column>
                    <Column></Column>
                </Row> */}
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