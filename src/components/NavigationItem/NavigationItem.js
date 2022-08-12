import React from 'react'
import styles from './NavigationItem.module.css'

const NavigationItem = (props) => {
    const liClasses = props.active ? `${styles.active}` : ``;
    return (
        <li className={liClasses}>{props.children}</li>
    )
}

export default NavigationItem