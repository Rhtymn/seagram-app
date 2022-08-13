import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './StudentPage.module.css';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';


const StudentPage = () => {
  const activeSideNav = useSelector((state)=>state.ui.activeSideNav);
  return (
    <div className={`${styles.student_page}`}>
        <Navbar/>
        <div className={`${styles.body_container}`}>
          <Sidebar>
            <SidebarItem label="Dashboard" to="/student/dashboard" active={activeSideNav === 'dashboard' && true}>
              <i class="fa-solid fa-gauge-high"></i>
            </SidebarItem>
            <SidebarItem label="Course" to="/student/course" active={activeSideNav === 'course' && true}>
              <i class="fa-solid fa-book-open"></i>
            </SidebarItem>
          </Sidebar>
          <Outlet/>
        </div>
    </div>
  )
}

export default StudentPage;