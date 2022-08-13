import React from 'react'
import SidebarContainer from '../../UI/SidebarContainer/SidebarContainer';

const Sidebar = (props) => {
    return (
    <SidebarContainer>
        {props.children}
    </SidebarContainer>
)
}

export default Sidebar