import React from 'react'
import styles from './NavigationItem.module.css'

const NavigationItem = (props) => {
    const liClasses = props.active ? `${styles.navigation_item} ${styles.active}` : `${styles.navigation_item}`;
    return (
        <li className={liClasses}>{props.children}</li>
    )
}

export default NavigationItem