import React, {useState} from 'react';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../LogoutButton/LogoutButton';

const RNavbar = (props) => {
    const [isShowSidebarToggle, setIsShowSidebarToggle] = useState(true);
    const sidebarToggleClasses = isShowSidebarToggle ? `${styles.sidebar_toggle}` : `d-none`;

    return <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
            <Navbar.Brand href="#home">Seagram</Navbar.Brand>
            <div className='d-flex'>
                <LogoutButton/>
                <button className={`${sidebarToggleClasses} d-md-none`} onClick={props.onToggleSidebar}>
                    <i class="fa-solid fa-align-justify"></i>
                </button>
            </div>
        </Container>
</Navbar>
}

export default RNavbar;