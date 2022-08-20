import React from "react";
import styles from "./VerifiedCourseDetails.module.css";
import Button from "../../UI/Button/Button";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VerifiedCourseDetails = (props) => {
  const params = useParams();
  const user = useSelector((state) => state.user.information);
  const enrollHandler = async () => {
    try {
      const headers = new Headers();
      headers.append("content-type", "application/json");
      const reqOptions = {
        method: "POST",
        headers: headers,
        redirect: "follow",
        body: JSON.stringify({
          courseId: `${params.courseId}`,
        }),
      };
      const response = await fetch(
        `https://seagram-api.herokuapp.com/api/accounts/enrolledCourses?access_token=${user.token}`,
        reqOptions
      );
      if (!response.ok) throw new Error("Something went wrong");
      console.log("Enrolled");
    } catch (error) {
      console.log(error.message);
    }
  };

  const Content = (
    <div className={`${styles.course_information}`}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{props.state.title}</h1>
        <span>{props.state.instructor}</span>
      </div>
      <div className={`${styles.divider}`}></div>
      <div className={`${styles.description}`}>
        <div className={`${styles.description_title}`}>
          <h2>Description</h2>
        </div>
        <div className={`${styles.description_text}`}>
          <p>{props.state.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            nisl condimentum id venenatis a condimentum vitae sapien
            pellentesque. Vitae ultricies leo integer malesuada.
          </p>
        </div>
      </div>
      {props.state.back && <Button clickHandler={enrollHandler}>Enroll</Button>}
    </div>
  );

  return <>{Content}</>;
};

export default VerifiedCourseDetails;
