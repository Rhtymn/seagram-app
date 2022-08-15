import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = (props) => {
    return <div className={`${styles.pagination}`}>
        <div className={`${styles.prev}`} onClick={props.onPrevPage}>
            <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className={`${styles.next}`} onClick={props.onNextPage}>
            <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
    </div>
}

export default Pagination