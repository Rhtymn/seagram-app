import {createSlice} from "@reduxjs/toolkit";

const ENROLLED_COURSE = [
    {id:1, type:"enrolled", courseName:"Machine Learning", instructor:"Alan Turing", progress:"25%"},
    {id:2, type:"enrolled", courseName:"Artificial Intelligence", instructor:"Robert", progress:"35%"},
    {id:3, type:"enrolled", courseName:"Mathematics", instructor:"George", progress:"35%"},
    {id:4, type:"enrolled", courseName:"Physics", instructor:"Thomas", progress:"35%"},
    {id:5, type:"enrolled", courseName:"Data Structure", instructor:"Lamela", progress:"35%"},
    {id:6, type:"enrolled", courseName:"Machine Learning", instructor:"Alan Turing", progress:"35%"},
    {id:7, type:"enrolled", courseName:"Artificial Intelligence", instructor:"Robert", progress:"35%"},
    {id:8, type:"enrolled", courseName:"Mathematics", instructor:"George", progress:"35%"},
    {id:9, type:"enrolled", courseName:"Physics", instructor:"Thomas", progress:"35%"},
    {id:10, type:"enrolled", courseName:"Data Structure", instructor:"Lamela", progress:"35%"}
]

const VERIFIED_COURSE = [
    {id:1, type:"verified", courseName:"Machine Learning", instructor:"Alan Turing"},
    {id:2, type:"verified", courseName:"Artificial Intelligence", instructor:"Robert"},
    {id:3, type:"verified", courseName:"Mathematics", instructor:"George"},
    {id:4, type:"verified", courseName:"Physics", instructor:"Thomas"},
    {id:5, type:"verified", courseName:"Data Structure", instructor:"Lamela"},
    {id:6, type:"verified", courseName:"Machine Learning", instructor:"Alan Turing"},
    {id:7, type:"verified", courseName:"Artificial Intelligence", instructor:"Robert"},
    {id:8, type:"verified", courseName:"Mathematics", instructor:"George"},
    {id:9, type:"verified", courseName:"Physics", instructor:"Thomas"},
    {id:10, type:"verified", courseName:"Data Structure", instructor:"Lamela"}
]

const COURSE_PROGRAM = [
    {id:1, courseName:"Machine Learning", instructor:"Alan Turing", enrolledStudent:10, status:"pending", date:"2022/08/14"},
    {id:2, courseName:"Artificial Intelligence", instructor:"Robert", enrolledStudent:5, status:"rejected", date:"2022/08/14"},
    {id:3, courseName:"Mathematics", instructor:"George", enrolledStudent:15, status:"verified", date:"2022/08/14"},
    {id:4, courseName:"Physics", instructor:"Thomas", enrolledStudent:14, status:"verified", date:"2022/08/14"},
    {id:5, courseName:"Data Structure", instructor:"Lamela", enrolledStudent:21, status:"rejected", date:"2022/08/14"},
    {id:6, courseName:"Machine Learning", instructor:"Alan Turing", enrolledStudent:29, status:"pending", date:"2022/08/14"},
    {id:7, courseName:"Artificial Intelligence", instructor:"Robert", enrolledStudent:13, status:"verified", date:"2022/08/14"},
    {id:8, courseName:"Mathematics", instructor:"George", enrolledStudent:16, status:"rejected", date:"2022/08/14"},
    {id:9, courseName:"Physics", instructor:"Thomas", enrolledStudent:5, status:"pending", date:"2022/08/14"},
    {id:10, courseName:"Data Structure", instructor:"Lamela", enrolledStudent:4, status:"pending", date:"2022/08/14"}
]

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        enrolledCourse: ENROLLED_COURSE,
        verifiedCourse: VERIFIED_COURSE,
        courseProgram: COURSE_PROGRAM,
    },
    reducers: {
    }
})

export const courseActions = courseSlice.actions;
export default courseSlice;