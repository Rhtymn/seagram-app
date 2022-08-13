import React from 'react'
import SidebarContainer from '../../UI/SidebarContainer/SidebarContainer';

const Sidebar = (props) => {
    return (
    <SidebarContainer show={props.show}>
        {props.children}
    </SidebarContainer>
)
}

export default Sidebar