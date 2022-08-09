import React, {useState} from 'react';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../LogoutButton/LogoutButton';

const RNavbar = (props) => {
    return <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
            <Navbar.Brand href="#home">Seagram</Navbar.Brand>
            <div className='d-flex'>
                <LogoutButton/>
                <button className={`${styles.sidebar_toggle} d-md-none`} onClick={props.onToggleSidebar}>
                    <i class="fa-solid fa-align-justify"></i>
                </button>
            </div>
        </Container>
</Navbar>
}

export default RNavbar;