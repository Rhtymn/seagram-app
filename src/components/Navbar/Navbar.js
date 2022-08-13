import React from 'react';
import styles from './Navbar.module.css';

const RNavbar = (props) => {
    return <nav className={`${styles.navbar}`}>
        <div className={`${styles.navbar_brand}`}>
            <h1 className='d-md-none'>Seagram</h1>
        </div>
        <div className={`${styles.navbar_actions}`}>
            <button className={`${styles.sidebar_toggle} d-md-none`} onClick={props.onShowSidebar}>
                    <i class="fa-solid fa-align-justify"></i>
            </button>
        </div>
    </nav>
}

export default RNavbar;