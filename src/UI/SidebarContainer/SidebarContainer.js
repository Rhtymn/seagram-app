import React from 'react';
import styles from './SidebarContainer.module.css';
import {useSelector} from 'react-redux';

const SidebarContainer = (props) => {
    const isShowSidebar = useSelector((state) => state.ui.isShowSidebar);
    const sidebarClasses = isShowSidebar? `${styles.sidebar} ${styles.show_sidebar}` : `${styles.sidebar}`;

    return (
        <div className={sidebarClasses}>
            <h1 className="d-none d-md-block">Seagram</h1>
            <ul className={`${styles.sidebar_nav_container}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default SidebarContainer