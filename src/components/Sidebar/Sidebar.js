import React from 'react'
import SidebarContainer from '../../UI/SidebarContainer/SidebarContainer';
import styles from './Sidebar.module.css';
import SidebarItem from '../../components/SidebarItem/SidebarItem'

const Sidebar = (props) => {
    return (
    <SidebarContainer isShowSidebar={props.isShowSidebar}>
        <SidebarItem label="Dashboard" to="/student/dashboard" onChangeSidenav={props.onChangeSidenav}><i class="fa-solid fa-gauge-high"></i></SidebarItem>
        <SidebarItem label="Course" to="/student/course" onChangeSidenav={props.onChangeSidenav}><i class="fa-solid fa-book-open"></i></SidebarItem>
    </SidebarContainer>
)
}

export default Sidebar