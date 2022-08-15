import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = (props) => {
    console.log(props.currentPage, props.maxPage)
    const prevClasses = props.currentPage === 0 ? `${styles.prev} ${styles.disable}` : `${styles.prev}`;
    const nextClasses = props.currentPage === props.maxPage ? `${styles.next} ${styles.disable}` : `${styles.next}`;
    return <div className={`${styles.pagination}`}>
        <div className={prevClasses} onClick={props.onPrevPage}>
            <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className={nextClasses} onClick={props.onNextPage}>
            <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
    </div>
}

export default Pagination