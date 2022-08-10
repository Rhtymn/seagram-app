import React, {useState} from 'react';
import styles from './Navbar.module.css';
import LogoutButton from '../LogoutButton/LogoutButton';

const RNavbar = (props) => {
    return <nav className={`${styles.navbar}`}>
        <div className={`${styles.navbar_brand}`}>
            <h1>Seagram</h1>
        </div>
        <div className={`${styles.navbar_actions}`}>
            <LogoutButton/>
            <button className={`${styles.sidebar_toggle} d-md-none`} onClick={props.onToggleSidebar}>
                    <i class="fa-solid fa-align-justify"></i>
            </button>
        </div>
    </nav>
}

export default RNavbar;