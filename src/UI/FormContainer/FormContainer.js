import styles from "./FormContainer.module.css";
const FormContainer = (props) => {
  const isVisibleNotification = props.notification.isVisible ? `` : `d-none`;
  let Notification;
  if (props.notification.type === "alert") {
    Notification = (
      <div
        className={`${styles.notification} alert alert-danger ${isVisibleNotification} text-center`}
        role="alert"
      >
        {props.notification.message}
      </div>
    );
  } else if (props.notification.type === "success") {
    Notification = (
      <div
        class={`${styles.notification} alert alert-success ${isVisibleNotification} text-center`}
        role="alert"
      >
        {props.notification.message}
      </div>
    );
  }
  return (
    <div className={styles.form_container}>
      {/* <div
        className={`${styles.notification} alert alert-danger ${isVisibleNotification} text-center`}
        role="alert"
      >
        {props.notification.message}
      </div> */}
      {Notification}
      {props.children}
    </div>
  );
};

export default FormContainer;
