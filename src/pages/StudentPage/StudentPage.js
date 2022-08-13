import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './StudentPage.module.css';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import { useSelector, useDispatch } from 'react-redux';
import { uiStudentActions } from '../../store/ui-student-slice';


const StudentPage = () => {
  const dispatch = useDispatch();
  const activeSideNav = useSelector((state)=>state.uiStudent.activeSideNav);
  const isShowSidebar = useSelector((state) => state.uiStudent.isShowSidebar);

  const sideNavClickHandler = (activeSideNav) => {
    dispatch(uiStudentActions.toggleSidebar());
    dispatch(uiStudentActions.toggleActiveSideNav(activeSideNav));
  }

  const toggleSidebarHandler = () => {
    dispatch(uiStudentActions.toggleSidebar());
  }

  return (
    <div className={`${styles.student_page}`}>
        <Navbar onShowSidebar={toggleSidebarHandler}/>
        <div className={`${styles.body_container}`}>
          <Sidebar show={isShowSidebar}>
            <SidebarItem label="Dashboard" to="/student/dashboard" 
              active={activeSideNav === 'dashboard' && true}
              onClickSidebarItem={sideNavClickHandler}>
                <i class="fa-solid fa-gauge-high"></i>
            </SidebarItem>
            <SidebarItem label="Course" to="/student/course" 
              active={activeSideNav === 'course' && true}
              onClickSidebarItem={sideNavClickHandler}>
                <i class="fa-solid fa-book-open"></i>
            </SidebarItem>
          </Sidebar>
          <Outlet/>
        </div>
    </div>
  )
}

export default StudentPage;