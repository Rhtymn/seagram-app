import React, {useRef, useState} from 'react';
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

const Question = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const questionInfoClasses = showInfo ? `${styles.question_information}` : `${styles.question_information} d-none`;
    const toggleInfoHandler = () => {
        setShowInfo((prev)=>{
            return !prev;
        })
    }
    const deleteQuestionHandler = () => {

    }
    return (
        <div className={`${styles.question_container}`} onClick={toggleInfoHandler}>
            <div className={`${styles.questionView}`}>
                <span>Question</span>
                <div onClick={deleteQuestionHandler}><i class="fa-solid fa-circle-xmark"></i></div>
            </div>
            <div className={questionInfoClasses}>
                <div className={`${styles.question}`}>
                    {props.question}
                </div>
                <ul className={`${styles.answer}`}>
                    <li>A. {props.option[0]}</li>
                    <li>B. {props.option[1]}</li>
                    <li>C. {props.option[2]}</li>
                    <li>D. {props.option[3]}</li>
                    <li>E. {props.option[4]}</li>
                </ul>
            </div>
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

    // LECTURE QUIZ
    const [showQuizForm, setQuizForm] = useState(false);
    const question = useRef(null);
    const optionA = useRef(null);
    const optionB = useRef(null);
    const optionC = useRef(null);
    const optionD = useRef(null);
    const optionE = useRef(null);
    const [quizList, setQuizList] = useState([
        [
            {question:"1+1",option:{A:"2",B:"3",C:"4",D:"5"}},
            {question:"2+1",option:{A:"2",B:"3",C:"4",D:"5"}}
        ]
    ]);
    const [questionList, setQuestionList] = useState([
        {id: 1, question:"Lorem lorem ipsum dashjdg sdadnjkasd ddsakjdas daskjdasn ?",option:["Lorem sad","Lorem sad","Lorem sad","Lorem sad","Lorem sad"]}
    ]);
    const toggleQuizFormHandler = (e) => {
        e.preventDefault();
        setQuizForm((prev)=>{
            return !prev;
        })
    }
    const addQuestionHandler = (en) => {
        en.preventDefault()
        const a = optionA.current.value;
        const b = optionB.current.value;
        const c = optionC.current.value;
        const d = optionD.current.value;
        const e = optionE.current.value;
        const newQuestion = {
            id:2,
            question: question.current.value,
            option:[a,b,c,d,e],
        }
        setQuestionList((prev)=>{
            const newQuestionList = [...prev, newQuestion];
            return newQuestionList;
        })
        question.current.value = optionA.current.value = optionB.current.value = optionC.current.value = optionD.current.value = optionE.current.value = "";
    }
    const QuizForm = <div className={`${styles.quiz_form}`}>
        <div className={`${styles.question_input}`}>
            <textarea type="text" placeholder='Question' required ref={question}></textarea>
        </div>
        <div className={`${styles.answer_input}`}>
            <input type="text" placeholder='Option A' ref={optionA} required></input>
            <input type="text" placeholder='Option B' ref={optionB} required></input>
            <input type="text" placeholder='Option C' ref={optionC} required></input>
            <input type="text" placeholder='Option D' ref={optionD} required></input>
            <input type="text" placeholder='Option E' ref={optionE} required></input>
        </div>
        <button className={`${styles.add_question}`} onClick={addQuestionHandler}>Add</button>
    </div>

    const QuestionListView = questionList.map((question)=> <Question key={question.id} {...question}/>)

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
                        <button onClick={toggleQuizFormHandler}><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    {QuestionListView}
                    {showQuizForm && QuizForm}
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