import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styles from "./CourseProgramDetails.module.css";

const CourseProgramDetails = (props) => {
    const courseInfo = useSelector((state)=>state.uiInstructor.activeCourseDetails);
    const [RcourseName, setRcourseName] = useState("");
    const [McourseName, setMcourseName] = useState(courseInfo.courseName);
    const [Rdescription, setRdescription] = useState("");
    const [Mdescription, setMdescription] = useState(courseInfo.description);

    const courseNameChangeHandler = (e) => {
        if (props.type === "modify") setMcourseName(e.target.value);
        if (props.type === "form") setRcourseName(e.target.value);
    }

    const descriptionChangeHandler = (e) => {
        if (props.type === "modify") setMdescription(e.target.value);
        if (props.type === "form") setRdescription(e.target.value);
    }

    return (
        <div className={`${styles.courseProgram_details}`}>
            <form>
                <div className={`${styles.course_name}`}>
                    <label>Course Name :</label>
                    {props.type === "form" && <input value={RcourseName} type="text" onChange={courseNameChangeHandler}></input>}
                    {props.type === "modify" && <input value={McourseName} type="text" onChange={courseNameChangeHandler}></input>}
                </div>
                <div className={`${styles.course_description}`}>
                    <label>Course Description :</label>
                    {props.type === "form" && <textarea value={Rdescription} onChange={descriptionChangeHandler}></textarea>}
                    {props.type === "modify" && <textarea value={Mdescription} onChange={descriptionChangeHandler}></textarea>}
                </div>
                <div className={`${styles.course_lecture}`}>
                    <div className={`${styles.course_lecture_actions}`}>
                        <h2>Lecture</h2>
                        <button><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    <div className={`${styles.lecture_form}`}>
                        <select>
                            <option>PDF</option>
                            <option>URL</option>
                        </select>
                        <div className={`${styles.lecture_input}`}>
                            <input type="text" placeholder="Lecture Name"></input>
                            <input type="text" placeholder='URL'></input>
                        </div>
                    </div>
                </div>
                <div className={`${styles.course_quiz}`}>
                    <div className={`${styles.course_quiz_actions}`}>
                        <h2>Quiz</h2>
                        <button><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                    <div className={`${styles.divider}`}></div>
                </div>
            </form>
        </div>
    )
}

export default CourseProgramDetails;    