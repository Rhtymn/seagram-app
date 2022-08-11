import {createSlice} from "@reduxjs/toolkit";

const ENROLLED_COURSE = [
    {id:1, type:"enrolled", courseName:"Machine Learning", instructor:"Alan Turing", progress:"35%"},
    {id:2, type:"enrolled", courseName:"Artificial Intelligence", instructor:"Robert", progress:"35%"},
    {id:3, type:"enrolled", courseName:"Mathematics", instructor:"George", progress:"35%"},
    {id:4, type:"enrolled", courseName:"Physics", instructor:"Thomas", progress:"35%"},
    {id:5, type:"enrolled", courseName:"Data Structure", instructor:"Lamela", progress:"35%"}
]

const VERIFIED_COURSE = [
    {id:1, type:"verified", courseName:"Machine Learning", instructor:"Alan Turing"},
    {id:2, type:"verified", courseName:"Artificial Intelligence", instructor:"Robert"},
    {id:3, type:"verified", courseName:"Mathematics", instructor:"George"},
    {id:4, type:"verified", courseName:"Physics", instructor:"Thomas"},
    {id:5, type:"verified", courseName:"Data Structure", instructor:"Lamela"}
]


const courseSlice = createSlice({
    name: 'course',
    initialState: {enrolledCourse: ENROLLED_COURSE, verifiedCourse: VERIFIED_COURSE},
    reducers: {
    }
})

export const courseActions = courseSlice.actions;
export default courseSlice;