import React from 'react'
import SidebarContainer from '../../UI/SidebarContainer/SidebarContainer';
import styles from './Sidebar.module.css';
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux';

const Sidebar = (props) => {
    const activeSideNav = useSelector((state)=>state.ui.activeSideNav);

    return (
    <SidebarContainer>
        <SidebarItem label="Dashboard" to="/student/dashboard" active={activeSideNav === 'dashboard' && true}>
            <i class="fa-solid fa-gauge-high"></i>
        </SidebarItem>
        <SidebarItem label="Course" to="/student/course" active={activeSideNav === 'course' && true}>
                <i class="fa-solid fa-book-open"></i>
        </SidebarItem>
    </SidebarContainer>
)
}

export default Sidebar