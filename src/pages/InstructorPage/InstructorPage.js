import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import styles from './InstructorPage.module.css';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import {useSelector, useDispatch} from 'react-redux';
import { uiInstructorActions } from '../../store/ui-instructor-slice';
import { Outlet } from "react-router-dom";

const InstructorPage = () => {
    const dispatch = useDispatch();
    const activeSideNav = useSelector((state)=>state.uiInstructor.activeSideNav);
    const isShowSidebar = useSelector((state) => state.uiInstructor.isShowSidebar);

    const sideNavClickHandler = (activeSideNav) => {
        dispatch(uiInstructorActions.toggleSidebar());
        dispatch(uiInstructorActions.toggleActiveSideNav(activeSideNav));
    }

    const toggleSidebarHandler = () => {
        dispatch(uiInstructorActions.toggleSidebar());
    }

    return (
        <div className={`${styles.instructor_page}`}>
            <Navbar onShowSidebar={toggleSidebarHandler}/>
            <div className={`${styles.body_container}`}>
                <Sidebar show={isShowSidebar}>
                    <SidebarItem label="Dashboard" to="/instructor/dashboard" active={activeSideNav === 'dashboard' && true} 
                        onClickSidebarItem={sideNavClickHandler}>
                            <i class="fa-solid fa-gauge-high"></i>
                    </SidebarItem>
                    <SidebarItem label="Course" to="/instructor/course" active={activeSideNav === 'course' && true} 
                        onClickSidebarItem={sideNavClickHandler}>
                            <i class="fa-solid fa-book-open"></i>
                    </SidebarItem>
                </Sidebar>
                <Outlet/>
            </div>
        </div>
    )
}

export default InstructorPage