import styles from './FormContainer.module.css';
const FormContainer = (props) => {
    return <div className={styles.form_container}>{props.children}</div>
}

export default FormContainer;