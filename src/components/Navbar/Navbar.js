import React from 'react';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../LogoutButton/LogoutButton';

const RNavbar = () => {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Seagram</Navbar.Brand>
            <LogoutButton/>
        </Container>
</Navbar>
}

export default RNavbar;