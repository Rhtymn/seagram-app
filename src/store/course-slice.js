import {createSlice} from "@reduxjs/toolkit";

const ENROLLED_COURSE = [
    {id:1, courseName:"Machine Learning", instructor:"Alan Turing", progress:"35%"},
    {id:2, courseName:"Artificial Intelligence", instructor:"Robert", progress:"35%"},
    {id:3, courseName:"Mathematics", instructor:"George", progress:"35%"},
    {id:4, courseName:"Physics", instructor:"Thomas", progress:"35%"},
    {id:5, courseName:"Data Structure", instructor:"Lamela", progress:"35%"}
]

const VERIFIED_COURSE = [
    {id:1, courseName:"Machine Learning", instructor:"Alan Turing"},
    {id:2, courseName:"Artificial Intelligence", instructor:"Robert"},
    {id:3, courseName:"Mathematics", instructor:"George"},
    {id:4, courseName:"Physics", instructor:"Thomas"},
    {id:5, courseName:"Data Structure", instructor:"Lamela"}
]


const courseSlice = createSlice({
    name: 'course',
    initialState: {enrolledCourse: ENROLLED_COURSE, verifiedCourse: VERIFIED_COURSE},
    reducers: {
    }
})

export const courseActions = courseSlice.actions;
export default courseSlice;