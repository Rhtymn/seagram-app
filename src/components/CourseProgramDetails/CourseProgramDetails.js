import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styles from "./CourseProgramDetails.module.css";

const Lecture = (props) => {
    console.log(props);
    const deleteLectureHandler = () => {
        props.deleteLecture(props.id);
    }    
    return (
        <div className={`${styles.lecture}`}>
            <a href={props.url}>{props.lectureName}</a>
            <div className={`${styles.delete_lecture}`} onClick={deleteLectureHandler}><i class="fa-solid fa-circle-xmark"></i></div>
        </div>
    )
}

const CourseModify = (props) => {
    const courseInfo = useSelector((state)=>state.uiInstructor.activeCourseDetails);
    const [McourseName, setMcourseName] = useState(courseInfo.courseName);
    const [Mdescription, setMdescription] = useState(courseInfo.description);
    
    const courseNameChangeHandler = (e) => {
        setMcourseName(e.target.value);
    }
    
    const descriptionChangeHandler = (e) => {
        setMdescription(e.target.value);
    }

    // LECTURE FORM
    const [showLectureForm, setShowLectureForm] = useState(false);
    const [lectureInputType, setLectureInputType] = useState("URL");
    const lectureInputTypeChangeHandler = (e) => {
        setLectureInputType(e.target.value);
    }
    const toggleLectureForm = (e) => {
        e.preventDefault();
        setShowLectureForm((prev)=>{
            return !prev;
        })
    }
    const LectureForm = <div className={`${styles.lecture_form}`}>
        <select name='lecture-type' id="lecture-type" onChange={lectureInputTypeChangeHandler}>
            <option>URL</option>
            <option>PDF</option>
        </select>
        <div className={`${styles.lecture_input}`}>
            <input type="text" placeholder="Lecture Name"></input>
            {lectureInputType === "URL" && <input type="text" placeholder='URL'></input>}
            {lectureInputType === "PDF" && <input type="file"></input>}
        </div>
    </div>

    return (
        <div className={`${styles.courseProgram_details}`}>
            <form>
                <div className={`${styles.course_name}`}>
                    <label>Course Name :</label>
                    <input value={McourseName} type="text" onChange={courseNameChangeHandler}></input>
                </div>
                <div className={`${styles.course_description}`}>
                    <label>Course Description :</label>
                    <textarea value={Mdescription} onChange={descriptionChangeHandler}></textarea>
                </div>
                <div className={`${styles.course_lecture}`}>
                    <div className={`${styles.course_lecture_actions}`}>
                        <h2>Lecture</h2>
                        <button onClick={toggleLectureForm}><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    {showLectureForm && LectureForm}
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

const CourseForm = (props) => {
    const [RcourseName, setRcourseName] = useState("");
    const [Rdescription, setRdescription] = useState("");
    const courseNameChangeHandler = (e) => {
        setRcourseName(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        setRdescription(e.target.value);
    }

    // LECTURE FORM
    const [lectureList, setLectureList] = useState([
        {id: 1, lectureName: "Chapter 1: Machine Learning", url: "https://youtu.be/7eh4d6sabA0"},
        {id: 2, lectureName: "Chapter 2: Machine Learning", url: "https://youtu.be/7eh4d6sabA0"},
        {id: 3, lectureName: "Chapter 3: Machine Learning", url: "https://youtu.be/7eh4d6sabA0"},
    ]);
    const [showLectureForm, setShowLectureForm] = useState(false);
    const [lectureInputType, setLectureInputType] = useState("URL");
    const [lectureName, setLectureName] = useState("");
    const [lectureURL, setLectureURL] = useState("");
    const lectureInputTypeChangeHandler = (e) => {
        setLectureInputType(e.target.value);
    }
    const toggleLectureForm = (e) => {
        e.preventDefault();
        setShowLectureForm((prev)=>{
            return !prev;
        })
    }
    const lectureNameChangeHandler = (e) => {
        setLectureName(e.target.value);
    }
    const lectureURLChangeHandler = (e) => {
        setLectureURL(e.target.value);
    }
    const addLectureHandler = (e) => {
        e.preventDefault();
        setLectureList((prev)=>{
            return [...prev, {id: 2,lectureName, url:lectureURL}]
        })
        setLectureName("");
        setLectureURL("");
    }

    const deleteLectureHandler = (id) => {
        setLectureList((prev)=>{
            const newLectureList = [...prev].filter((lecture)=>lecture.id !== id);
            return newLectureList;
        })
    }

    const LectureForm = <div className={`${styles.lecture_form}`}>
        <select name='lecture-type' id="lecture-type" onChange={lectureInputTypeChangeHandler}>
            <option>URL</option>
            <option>PDF</option>
        </select>
        <div className={`${styles.lecture_input}`}>
            <input value={lectureName} type="text" placeholder="Lecture Name" required onChange={lectureNameChangeHandler}></input>
            {lectureInputType === "URL" && <input value={lectureURL} type="text" placeholder='URL' onChange={lectureURLChangeHandler} required></input>}
            {lectureInputType === "PDF" && <input type="file" required></input>}
            <button className={`${styles.add_lecture}`} onClick={addLectureHandler}>Add</button>
        </div>
    </div>
    
    const lectureListView = lectureList.map((lecture) => <div key={lecture.id} className={`${styles.lecture}`}>
        <a href={lecture.url} target="_blank">{lecture.lectureName}</a>
        <div className={`${styles.delete_lecture}`} onClick={()=>deleteLectureHandler(lecture.id)}><i class="fa-solid fa-circle-xmark"></i></div>
    </div>)

    return (
        <div className={`${styles.courseProgram_details}`}>
            <form>
                <div className={`${styles.course_name}`}>
                    <label>Course Name :</label>
                    <input value={RcourseName} type="text" onChange={courseNameChangeHandler}></input>
                </div>
                <div className={`${styles.course_description}`}>
                    <label>Course Description :</label>
                    <textarea value={Rdescription} onChange={descriptionChangeHandler}></textarea>
                </div>
                <div className={`${styles.course_lecture}`}>
                    <div className={`${styles.course_lecture_actions}`}>
                        <h2>Lecture</h2>
                        <button onClick={toggleLectureForm}><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    {showLectureForm && LectureForm}
                    {lectureListView}
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

const CourseProgramDetails = (props) => {
    return (
        <>
            {props.type === "form" && <CourseForm {...props}/>}
            {props.type === "modify" && <CourseModify {...props}/>}
        </>
    )
}

export default CourseProgramDetails;    