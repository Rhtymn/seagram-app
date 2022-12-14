import React from 'react';
import styles from './SelectContainer.module.css';

const SelectContainer = (props) => {
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.label}`}>{props.label}</span>
            <div className={`${styles.select_container}`} onClick={props.onSelectClick}>
                <div className={`${styles.selected}`}>
                    <span>{props.selected}</span>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default SelectContainer